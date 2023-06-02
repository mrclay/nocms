<?php

namespace NoCms;

use NoCms\Authenticator;
use NoCms\Asset\Type as AssetType;

const NAME_PATTERN = '@(\.txt|\.(?:block)\.html|\.json)$@';
const BASENAME_PATTERN = '@^([a-zA-Z0-9-_ ]+)(\.txt|\.block\.html|\.json)$@';

function getConfig(): Config {
  global $_NOCMS_CONFIG;
  if (!($_NOCMS_CONFIG instanceof Config)) {
    throw new Exception('Config not loaded. $_NOCMS_CONFIG is not a Config instance.');
  }
  return $_NOCMS_CONFIG;
}

function getUser(): User {
  return getConfig()->users[0];
}

function createCsrfToken() {
  return (new CSRF(getConfig()))->createCsrfToken();
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

  $res = (new Authenticator(getConfig()))->authenticate();
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
    (new CSRF(getConfig()))->assertNotCsrf();
  }

  if ($action === 'edit') {
    return actionEdit();
  }

  pageIndex();
}

function pageIndex() {
  $path = getConfig()->contentPath;
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

  $path = getConfig()->contentPath;
  $file = $path . DIRECTORY_SEPARATOR . "{$match['name']}{$type->ext}";
  return Asset::factory($file);
}

/**
 * @return Collection<Asset>
 */
function getAllAssets() {
  $path = getConfig()->contentPath;
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
  $config = getConfig();
  $siteHome = $config->siteHome;
  $siteName = $config->siteName;
  $htmlRoot = $config->htmlRoot;
  $htmlRoot = $config->htmlRoot;
  $loggedIn = (new Authenticator($config))->isAuthenticated();
  unset($config);

  htmlHeaders();
  include __DIR__ . '/template.php';
  exit;
}

function htmlHeaders() {
  header('Content-Type: text/html; charset=utf8');
  header('Cache-Control: no-cache');
}
