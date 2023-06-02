<?php

namespace NoCms;

use NoCms\User;

class Config {
  function __construct(
    public readonly string $adminSiteName,
    public readonly array /* User[] */ $users,
    public readonly string $secretKey,
    public readonly int $numBackups,
    public readonly string $siteName,
    public readonly string $siteHome,
    public readonly string $htmlRoot,
    public readonly string $privatePath,
    public readonly string $contentPath,
  ) {}

  function getUser(): User {
    return $this->users[0];
  }

}
