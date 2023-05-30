<?php
/**
 * Create nocms-config.php, index.css, and copy sample content in.
 */

$ds = DIRECTORY_SEPARATOR;

$configFile = __DIR__ . "{$ds}nocms-config.php";

if (is_file($configFile)) {
  die('Already installed');
}

$code = file_get_contents(__DIR__ . "{$ds}nocms-config.example.php");

// Auth secret key
$code = str_replace(
  "'jwtSecretKey' => '',",
  "'jwtSecretKey' => " . var_export(base64_encode(random_bytes(32)), true) . ",",
  $code
);

$dirs = [
  __DIR__ . "{$ds}nocms-private",
  dirname(__DIR__) . "{$ds}nocms-private",
  dirname(dirname(__DIR__)) . "{$ds}nocms-private",
];
foreach ($dirs as $path) {
  if (is_dir($path)) {
    // Configure private path.
    $code = str_replace(
      "'privatePath' => null,",
      "'privatePath' => " . var_export($path, true) . ",",
      $code
    );
    $code = str_replace(
      "'contentPath' => null,",
      "'contentPath' => " . var_export("$path{$ds}content", true) . ",",
      $code
    );

    // Copy sample content
    foreach (scandir("$path{$ds}sample-content") as $entry) {
      if (is_file("$path{$ds}sample-content{$ds}$entry")) {
        copy(
          "$path{$ds}sample-content{$ds}$entry",
          "$path{$ds}content{$ds}$entry"
        );
      }
    }
    break;
  }
}

file_put_contents($configFile, $code);

// Fresh CSS
$cssFile = __DIR__ . "{$ds}index.css";
if (!is_file($cssFile)) {
  copy(
    __DIR__ . "{$ds}static{$ds}index.example.css",
    $cssFile,
  );
}


echo "✓ NoCMS installed.";
