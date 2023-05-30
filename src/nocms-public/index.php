<?php

namespace NoCms;

$ds = DIRECTORY_SEPARATOR;

// Load config.

if (!is_file(__DIR__ . "{$ds}nocms-config.php")) {
  die('nocms-config.php not found.');
}

require __DIR__ . "{$ds}nocms-config.php";

// Verify private path.

if (!is_dir($_NOCMS_CONFIG['privatePath'])) {
  die('$_NOCMS_CONFIG["privatePath"] is not a directory.');
}

$private = $_NOCMS_CONFIG['privatePath'];

// Find/load autoloader.

$autoloads = [
  "{$private}{$ds}/vendor/autoload.php",
  __DIR__ . "{$ds}/vendor/autoload.php",
];
  $autoloadFound = false;
foreach ($autoloads as $autoload) {
  if (is_file($autoload)) {
    $autoloadFound = true;
    require $autoload;
  }
}
if (!$autoloadFound) {
  die('vendor/autoload.php not found. Was `composer install` run?');
}

require "{$private}{$ds}api.php";

try {
  handleRequest();
} catch (\Exception $ex) {
  die($ex->getMessage());
}
