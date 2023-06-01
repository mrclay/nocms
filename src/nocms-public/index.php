<?php

namespace NoCms;

$ds = DIRECTORY_SEPARATOR;

require __DIR__ . "{$ds}lib{$ds}autoload.php";

// Load config.

if (!is_file(__DIR__ . "{$ds}nocms-config.php")) {
  die('nocms-config.php not found.');
}

require __DIR__ . "{$ds}nocms-config.php";

// Verify private path.

if (!is_dir($_NOCMS_CONFIG->privatePath)) {
  die('$_NOCMS_CONFIG->privatePath is not a directory.');
}

// Find/load autoloader.

$autoloads = [
  "{$_NOCMS_CONFIG->privatePath}{$ds}vendor{$ds}autoload.php",
  __DIR__ . "{$ds}vendor{$ds}autoload.php",
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

try {
  handleRequest();
} catch (\Exception $ex) {
  die($ex->getMessage());
}
