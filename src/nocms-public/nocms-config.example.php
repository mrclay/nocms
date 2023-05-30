<?php

$_NOCMS_CONFIG = [
  'pwdHash' => '',

  'jwtSecretKey' => '',

  // # of previous versions to store
  'numBackups' => 2,

  // your user's site e.g. where the editable content appears
  'siteName' => $_SERVER['SERVER_NAME'],
  'siteHome' => str_replace('//', '/', dirname(dirname($_SERVER['SCRIPT_NAME'])) . '/'),

  // ends with "../nocms"
  'htmlRoot' => dirname($_SERVER['SCRIPT_NAME']),

  // directory containing api.php
  'privatePath' => null,

  // where editable content lives
  'contentPath' => null,

  'adminSiteName' => 'NoCMS',
];
