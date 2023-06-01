<?php

namespace NoCms;

class User {
  function __construct(
    public readonly string $username,
    public readonly string $pwdHash,
  ) {}

}
