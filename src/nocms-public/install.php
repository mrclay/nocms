<?php
/**
 * Create nocms-config.php, index.css, and copy sample content in.
 */

$ds = DIRECTORY_SEPARATOR;
$h = fn($str) => htmlspecialchars($str, ENT_QUOTES);

/**
 * @param string $content
 * @return never
 */
function sendPage(string $content) {
  header('Content-Type: text/html; charset=utf8');
  header('Cache-Control: no-cache');
  echo <<<EOD
    <!doctype html>
    <html>
      <head>
        <title>NoCMS Installer</title>
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
      </head>
      <body>
        <div class="container">
          <div class="page-header">
            <h1>NoCMS Installer</h1>
          </div>
          $content
        </div>
      </body>
    </html>
  EOD;
  exit;
}

$configFile = __DIR__ . "{$ds}nocms-config.php";

if (is_file($configFile)) {
  sendPage("<p class='alert alert-info'>NoCMS already installed.</p>");
}

$pwd = (string)($_POST['nocms-pwd'] ?? '');

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

if (strlen($pwd) < 8) {
  $msg = $pwd === ''
    ? ''
    : '<p class="alert alert-danger">Password too short.</p>';
  sendPage("$msg $setPwdForm");
}

$hash = password_hash($pwd, PASSWORD_BCRYPT);

$code = file_get_contents(__DIR__ . "{$ds}nocms-config.example.php");

$code = str_replace(
  "pwdHash: '',",
  "pwdHash: " . var_export($hash, true) . ",",
  $code
);
$code = str_replace(
  "secretKey: '',",
  "secretKey: " . var_export(base64_encode(random_bytes(32)), true) . ",",
  $code
);

$dirs = [
  __DIR__ . "{$ds}nocms-private",
  dirname(__DIR__) . "{$ds}nocms-private",
  dirname(dirname(__DIR__)) . "{$ds}nocms-private",
];
$dirs = array_filter($dirs, fn ($el) => is_dir($el));
$path = array_pop($dirs);

if (!$path) {
  sendPage('<p class="alert alert-danger">Could not find nocms-private directory.</p>');
}

$code = str_replace(
  "privatePath: '',",
  "privatePath: " . var_export($path, true) . ",",
  $code
);
$code = str_replace(
  "contentPath: '',",
  "contentPath: " . var_export("$path{$ds}content", true) . ",",
  $code
);

$report = [];

if (is_writable("$path{$ds}content")) {
  foreach (scandir("$path{$ds}sample-content") as $entry) {
    if (is_file("$path{$ds}sample-content{$ds}$entry")) {
      copy(
        "$path{$ds}sample-content{$ds}$entry",
        "$path{$ds}content{$ds}$entry"
      );
    }
  }

  $report[] = '<p class="text-success">Sample content loaded.</p>';
} else {
  $report[] = "<p class='alert alert-danger'>The content directory <code>{$h("$path{$ds}content")}</code> is not writable.</p>";
}

if (is_writable(__DIR__)) {
  file_put_contents($configFile, $code);

  $report[] = "<p class='text-success'>Created <code>{$h(basename($configFile))}</code>.</p>";

  $cssFile = __DIR__ . "{$ds}index.css";
  if (!is_file($cssFile)) {
    copy(
      __DIR__ . "{$ds}static{$ds}index.example.css",
      $cssFile,
    );
  }

  $report[] = '<p class="text-success">✓ NoCMS installed.</p>';
} else {
  $report[] = "<p class='alert alert-warning'>Config file directory <code>{$h(__DIR__)}</code> is not writable.</p>";

  $style = "font-family:monospace; margin-top:1rem";
  $textarea = "<textarea style='$style' rows=10 class='form-control' onfocus='this.select()'>{$h($code)}</textarea>";
  $p = "<p>To continue, you must place this content in <code>{$h(basename($configFile))}</code>:</p>";
  $report[] = "<div class='alert alert-info'>$p <div class='form-group'>$textarea</div></div>";
}

sendPage(implode('', $report));
