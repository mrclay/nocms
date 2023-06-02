<?php

$_NOCMS_CONFIG = new \NoCms\Config(
  adminSiteName: 'NoCMS',

  users: [
    new \NoCms\User(
      username: 'admin',
      pwdHash: '',
      isAdmin: true,
    ),
  ],

  secretKey: '',

  // # of previous versions to store
  numBackups: 2,

  siteName: $_SERVER['SERVER_NAME'],

  // your user's site e.g. where the editable content appears
  siteHome: str_replace('//', '/', dirname(dirname($_SERVER['SCRIPT_NAME'])) . '/'),

  // ends with "../nocms"
  htmlRoot: dirname($_SERVER['SCRIPT_NAME']),

  // directory containing api.php
  privatePath: '',

  // where editable content lives
  contentPath: '',
);
