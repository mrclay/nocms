<?php

$_NOCMS_CONFIG = new \NoCms\Config(
  // Parent site URL. (Where the content will appear)
  siteHome: str_replace('//', '/', dirname(dirname($_SERVER['SCRIPT_NAME'])) . '/'),

  // Parent site name.
  siteName: $_SERVER['SERVER_NAME'],

  // Number of previous versions to store.
  numBackups: 2,

  // Branding
  adminSiteName: 'NoCMS',

  // Complete file path of index.php.
  // In general you don't need to change this.
  htmlRoot: dirname($_SERVER['SCRIPT_NAME']),

  // nocms-private directory. No trailing slash.
  // In general you don't need to change this.
  privatePath: '',

  // Path where editable content lives. No trailing slash.
  // In general you don't need to change this.
  contentPath: '',

  // Site secret key.
  // In general you don't need to change this.
  secretKey: '',

  users: [
    new \NoCms\User(
      username: 'admin',
      pwdHash: '',
      isAdmin: true,
    ),
  ],
);
