<?php

/**
 * To use this file you must first require its autoloader:
 *
 * require '/path/to/nocms/vendor/autoload.php';
 */

namespace NoCms;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use JsArray;

if (!class_exists('JsArray')) {
  require __DIR__ . '/lib/JsArray.php';
}

const NAME_PATTERN = '@(\.txt|\.(?:block)\.html|\.json)$@';
const BASENAME_PATTERN = '@^([a-zA-Z0-9-_ ]+)(\.txt|\.block\.html|\.json)$@';


/////////////////////////////////////////////////////////////////// AUTH API

/**
 * Remove the authentication cookie.
 */
function logout() {
  $cookiePath = $_SERVER['REQUEST_URI'];
  [$cookiePath] = explode('?', $cookiePath);
  setcookie('nocms-jwt', '', 0, $cookiePath);
}

/**
 * Require the user to be logged in. If not, display a login form.
 *
 * @return AuthenticateResult
 */
function authenticate() {
  $ret = new AuthenticateResult();
  $h = escaper();

  if (!empty($_POST['nocms-logout'])) {
    assertNotCsrf();
    logout();
    $ret->location = getConfig('siteHome') . "?loggedOut=1";
    $ret->statusCode = 302;
    $ret->headline = adminSiteName() . " : Logged out";
    $ret->message = "<p>You are logged out.</p>";
    return $ret;
  }

  $pwd = (string) ($_POST['nocms-pwd'] ?? '');
  $jwt = rawurldecode((string) ($_COOKIE['nocms-jwt'] ?? ''));

  if (!getConfig('jwtSecretKey')) {
    $ret->statusCode = 500;
    $ret->headline = adminSiteName() . " : Setup";
    $ret->message = '<p><code>jwtSecretKey</code> not set.</p>';
    return $ret;
  }

  $setPwdForm = <<<EOD
    <form action='' method=POST class="form-horizontal">
      <div class="form-group">
        <label for='nocms-pwd' class="col-sm-2 control-label">New password</label>
        <div class="col-sm-10">
          <input type=password name='nocms-pwd' id='nocms-pwd' class="form-control" />
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type=submit class="btn btn-default">Set password</button>
        </div>
      </div>
    </form>
EOD;
  $loginForm = <<<EOD
    <form action='' method=POST class="form-horizontal">
      <div class="form-group">
        <label for='nocms-pwd' class="col-sm-2 control-label">Password</label>
        <div class="col-sm-10">
          <input type=password name='nocms-pwd' id='nocms-pwd' class="form-control" />
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type=submit class="btn btn-default">Log in</button>
        </div>
      </div>
    </form>
EOD;

  if (!getConfig('pwdHash')) {
    // Help set up.
    if ($pwd) {
      // Give the new hash.
      $hash = password_hash($pwd, PASSWORD_BCRYPT);

      $ret->statusCode = 500;
      $ret->headline = adminSiteName() . " : Setup";
      $ret->message = "<p>Set <code>pwdHash</code> to: <code>{$h($hash)}</code></p>";
      return $ret;
    }

    $ret->statusCode = 500;
    $ret->headline = adminSiteName() . " : Setup";
    $ret->message = $setPwdForm;
    return $ret;
  }

  if ($pwd) {
    // Trying to log in.
    if (!password_verify($pwd, getConfig('pwdHash'))) {
      sleep(5);

      $ret->statusCode = 400;
      $ret->headline = adminSiteName() . ' : Login';
      $ret->message = "<p>Bad password. Try again.</p> $loginForm";
      return $ret;
    }

    // Success, put jwt in cookie.
    $jwt = JWT::encode([], getConfig('jwtSecretKey'), 'HS256');

    $cookiePath = $_SERVER['REQUEST_URI'];
    [$cookiePath] = explode('?', $cookiePath);
    setcookie('nocms-jwt', rawurlencode($jwt), 0, $cookiePath);

    $ret->location = $_SERVER['REQUEST_URI'];
    $ret->statusCode = 302;
    $ret->headline = adminSiteName(). " : Login";
    $ret->message = "<p>You are logged in.</p>";
    return $ret;
  }

  if (isAuthenticated()) {
    $ret->authenticated = true;
    return $ret;
  }

  $ret->headline = adminSiteName() . " : Login";
  $ret->message = $loginForm;
  return $ret;
}

class AuthenticateResult {
  public $authenticated = false;
  public $headline = '';
  public $message = '';
  public $statusCode = 200;
  public $location = '';
}

function isAuthenticated() {
  $jwt = rawurldecode((string) ($_COOKIE['nocms-jwt'] ?? ''));
  if (!$jwt) {
    return false;
  }

  try {
    JWT::decode($jwt, new Key(getConfig('jwtSecretKey'), 'HS256'));
    return true;
  } catch (\Exception $e) {
    return false;
  }
}

/////////////////////////////////////////////////////////////////// NoCMS pages

/**
 * @param 'numBackups'|'siteName'|'siteHome'|'htmlRoot'|'privatePath'|'contentPath'|'adminSiteName' $key
 */
function getConfig(string $key) {
  global $_NOCMS_CONFIG;
  if (empty($_NOCMS_CONFIG)) {
    throw new Exception('Config not loaded. $_NOCMS_CONFIG is not set.');
  }

  if (!array_key_exists($key, $_NOCMS_CONFIG)) {
    throw new \InvalidArgumentException("\$_NOCMS_CONFIG does not have: $key");
  }
  return $_NOCMS_CONFIG[$key];
}

function adminSiteName() {
  return getConfig('adminSiteName');
}

function assertNotCsrf() {
  $key = getConfig('jwtSecretKey');
  $token = (string)($_POST['nocms-csrf'] ?? '');
  [$value, $hmac] = explode(' ', $token);

  if (!hash_equals($hmac, hash_hmac('sha256', $value, $key))) {
    throw new \Exception('Bad CRSF token.');
  }
}

function createCsrfToken() {
  $key = getConfig('jwtSecretKey');
  $value = bin2hex(random_bytes(16));
  $hmac = hash_hmac('sha256', $value, $key);
  return "$value $hmac";
}

function escaper() {
  return fn($str) => htmlspecialchars($str, ENT_QUOTES);
}

function handleRequest() {
  $page = '';
  if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $page = (string) ($_GET['page'] ?? '');
  }
  $action = (string) ($_POST['action'] ?? '');

  $res = authenticate();
  if ($res->location) {
    header("Cache-Control: no-cache");
    header("Location: {$res->location}", true, 302);
    exit;
  }
  if (!$res->authenticated) {
    htmlHeaders();
    http_response_code($res->statusCode);
    sendPage($res->headline, $res->message);
  }

  if ($page === 'edit') {
    return pageEdit();
  }

  if ($action) {
    assertNotCsrf();
  }

  if ($action === 'edit') {
    return actionEdit();
  }

  pageIndex();
}

function pageIndex() {
  $path = getConfig('contentPath');
  $lis = getAllAssets()
    ->map(function (Asset $asset) {
    $qs = '?' . http_build_query([
        'page' => 'edit',
        'basename' => $asset->getBasename(),
    ]);

    $h = escaper();
    $a = "<a href='{$h($qs)}'>{$h($asset->getTitle())}</a>";
    $type = $asset->getType()->typeName;
    $label = "<span><span class='label label-info'>{$h($type)}</span></span>";
    $li = "<li class='list-group-item'>$a $label</li>";

    return $li;
  });

  sendPage('Content', "<ul class='list-group'>{$lis->join('')}</li>");
}

function pageEdit() {
  $basename = (string)($_GET['basename'] ?? '');
  $asset = getAsset($basename);
  if (!$asset) {
    throw new Exception('Bad basename');
  }
  $type = $asset->getType()->typeName;
  $content = $asset->getContent();

  $h = escaper();
  switch ($type) {
    case 'block':
    case 'inline':
      $el = "<div id=editor>{$content}</div>";
      break;
    case 'text':
      $el = "<textarea id=editor name=content rows=20 cols=80>{$h($content)}</textarea>";
      break;
    case 'json':
      $el = "<div id=jsonData data-content='{$h($content)}'></div>";
  }

  $form = <<<EOD
    <form
      action=""
      method=POST
      data-type="{$h($asset->getType()->typeName)}"
      data-schema="{$h($asset->getJsonSchema())}"
    >
      <input type=hidden name="nocms-csrf" value="{$h(createCsrfToken())}">
      <input type=hidden name=action value=edit>
      <input type=hidden name=basename value="{$h($basename)}">
      {$el}
      <p class="built-in-submit">
        <input type=submit value=Update class="btn btn-info">
        <span class="or-cancel">
          or <a href="?page=index"><span class="text-danger">cancel</span></a>.
        </span>
      </p>
    </form>
EOD;

  sendPage("Edit: <em>{$asset->getTitle()}</em>", $form);
}

function actionEdit() {
  $basename = (string)($_GET['basename'] ?? '');
  $asset = getAsset($basename);
  if (!$asset) {
    throw new Exception('Bad basename');
  }
  $fetched = $asset->getContent();

  $getNewLine = function ($txt) {
    if ($txt !== str_replace("\r\n", "\n", $txt)) {
      return "\r\n";
    }
    if (false !== strpos($txt, "\r")) {
      return "\r";
    }
    return "\n";
  };

  $posted = str_replace("\r\n", "\n", $_POST['content'] ?? '');
  $blockNewline = $getNewLine($fetched);
  if ("\n" !== $blockNewline) {
    $posted = str_replace("\n", $blockNewline, $posted);
  }

  $different = md5($posted) !== md5($fetched);
  if ($different) {
    $asset->update($posted);
  }

  header("Cache-Control: no-cache");
  header("Location: ?page=index&updated=" . (int)$different, true, 302);
  exit;
}

/**
 * @return Asset|null
 */
function getAsset(string $basename, $notFoundValue = null) {
  $match = assertValidBasename($basename);
  $type = Asset::getAllTypes()
    ->find(fn (AssetType $type) => $type->ext === $match['ext']);
  if (!$type) {
    return $notFoundValue;
  }

  $path = getConfig('contentPath');
  $file = $path . DIRECTORY_SEPARATOR . "{$match['name']}{$type->ext}";
  return Asset::factory($file);
}

/**
 * @return Collection<Asset>
 */
function getAllAssets() {
  $path = getConfig('contentPath');
  return JsArray::from(scandir($path))
    ->map(fn($entry) => Asset::factory($path . DIRECTORY_SEPARATOR . $entry))
    ->filter('is_object');
}

function assertValidName(string $name) {
  if (!preg_match('~^[a-zA-Z0-9-_ ]+$~', $name)) {
    throw new \InvalidArgumentException('Invalid $name');
  }
}

function assertValidBasename(string $basename) {
  $matched = preg_match(BASENAME_PATTERN, $basename, $m);
  if (!$matched) {
    throw new Exception('Bad basename');
  }

  return ['name' => $m[1], 'ext' => $m[2]];
}

/**
 * @return never
 */
function sendPage(string $title, string $content, string $beforeBodyEnd = '') {
  $siteHome = getConfig('siteHome');
  $siteName = getConfig('siteName');
  $htmlRoot = getConfig('htmlRoot');
  $htmlRoot = getConfig('htmlRoot');
  $loggedIn = isAuthenticated();

  htmlHeaders();
  include __DIR__ . '/lib/template.php';
  exit;
}

function htmlHeaders() {
  header('Content-Type: text/html; charset=utf8');
  header('Cache-Control: no-cache');
}

class Asset {

  protected $file;
  protected $meta = [];

  private function __construct($file, $meta = []) {
    $this->file = $file;
    $this->meta = $meta;
  }

  static function factory(string $file) {
    if (!is_file($file) || !is_readable($file)) {
      return null;
    }

    $dirname = dirname($file);
    $basename = basename($file);
    if ('.' === $basename[0] || !preg_match(NAME_PATTERN, $basename, $m)) {
      return null;
    }

    $meta = [];

    if (str_ends_with($basename, ".json")) {
      $name = substr($basename, 0, strlen($basename) - 5);

      $schema = $dirname . DIRECTORY_SEPARATOR . ".$name.schema.json";
      $meta['jsonSchema'] = $schema;

      if (!is_file($schema) || !is_readable($schema)) {
        return null;
      }
    }

    return new self($file, $meta);
  }

  function getFile() {
    return $this->file;
  }

  function getBasename() {
    return basename($this->file);
  }

  function getType() {
    return Asset::getAllTypes()
      ->find(fn (AssetType $type) => str_ends_with($this->file, $type->ext));
  }

  /**
   * @return JsArray<AssetType>
   */
  static function getAllTypes() {
    static $types = null;
    if ($types === null) {
      $types = JsArray::from([
        new AssetType(typeName: 'block', isHtml: true, ext: '.block.html'),
        new AssetType(typeName: 'text', isHtml: false, ext: '.txt'),
        new AssetType(typeName: 'json', isHtml: false, ext: '.json'),
      ]);
    }
    return $types;
  }

  function getTitle() {
    $ext = $this->getType()->ext;

    $beforeExt = substr($this->getBasename(), 0, - strlen($ext));
    $title = preg_replace('@([a-z])_([a-z])@i', '$1 $2', $beforeExt);

    return ucwords($title);
  }

  function getContent() {
    return file_get_contents($this->file);
  }

  function getJsonSchema() {
    if (empty($this->meta['jsonSchema'])) {
      return "";
    }

    return file_get_contents($this->meta['jsonSchema']);
  }

  function output() {
    readfile($this->file);
  }

  function update(string $content) {
    $numBackups = getConfig('numBackups');
    if ($numBackups) {
      // store current rev
      copy($this->file, $this->file . $_SERVER['REQUEST_TIME']);

      $revPattern = '@^' . preg_quote($this->getBasename(), '@') . '\\d+$@';
      // count backups newest to eldest
      $revCount = 0;
      foreach (scandir(dirname($this->file), 1) as $entry) {
        if (!preg_match($revPattern, $entry)) {
          continue;
        }

        $revCount++;
        if ($revCount <= $numBackups) {
          continue;
        }

        unlink(dirname($this->file) . DIRECTORY_SEPARATOR . $entry);
      }
    }

    return file_put_contents($this->file, $content);
  }

}

class AssetType {
  function __construct(
    public readonly string $typeName,
    public readonly bool $isHtml,
    public readonly string $ext,
  ) {}

}
