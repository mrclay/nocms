<?php
$h = \NoCms\escaper();
/** @var string $siteHome */
/** @var string $siteName */
/** @var string $htmlRoot */
/** @var string $htmlRoot */
/** @var \NoCms\User|null $user */
?>
<!doctype html>
<html>
  <head>
    <title><?= $h(strip_tags($title)) ?> | <?= $h($siteName) ?></title>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="./index.css">
    <script src="https://cdn.ckeditor.com/ckeditor5/38.0.1/balloon/ckeditor.js"></script>
    <script crossorigin src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
    <script src="./static/jsonschema-form.umd.js"></script>
  </head>
  <body>
    <div class="page">
      <?php if ($user): ?>
      <form method="POST" action="" class="logout-form">
        <input type="hidden" name="nocms-csrf" value="<?= $h(\NoCms\createCsrfToken()) ?>">
        <input type="hidden" name="nocms-logout" value="1">
        <div>
          <?= $h($user->username) ?>
          <button class="btn btn-default">Log out</button>
        </div>
      </form>
      <?php endif; ?>

      <ol class="breadcrumb">
        <li>
          <a href="<?= $h($siteHome) ?>">
            <span aria-hidden="true" class="glyphicon glyphicon-home"></span>
            <?= $h($siteName) ?>
          </a>
        </li>
        <?php if ($user): ?>
          <li><a href="?page=index">Content</a></li>
        <?php endif; ?>
      </ol>

      <div class="alert alert-info" role="alert" hidden></div>

      <div class="page-header">
        <h1><?= $title ?></h1>
      </div>

      <?= $content ?>
    </div>

    <script type="module" src="./static/index.js"></script>
    <?= $beforeBodyEnd ?>
  </body>
</html>
