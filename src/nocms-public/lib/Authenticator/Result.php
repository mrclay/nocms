<?php

namespace NoCms\Authenticator;

use NoCms\User;

class Result {
  public $authenticated = false;
  public ?User $user = null;
  public $headline = '';
  public $message = '';
  public $statusCode = 200;
  public $location = '';
}
