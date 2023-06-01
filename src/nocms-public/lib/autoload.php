<?php

spl_autoload_register(function ($class) {
    $class = ltrim($class, '\\');

    if (!str_starts_with($class, 'NoCms\\')) {
        return;
    }

    // Remove namespace
    $class = substr($class, strlen('NoCms\\'));

    $file = __DIR__ . DIRECTORY_SEPARATOR . strtr($class, '_\\', '//') . '.php';
    is_readable($file) && (require $file);
});

if (!function_exists('NoCms\\authenticate')) {
  require __DIR__ . DIRECTORY_SEPARATOR . 'core.php';
}
