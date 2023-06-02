<?php

namespace NoCms;

class CSRF {

  function __construct(
    private readonly Config $config,
  ) {}

  function assertNotCsrf() {
    $token = (string)($_POST['nocms-csrf'] ?? '');
    [$value, $hmac] = explode(' ', $token);

    $expectedHash = hash_hmac('sha256', $value, $this->config->secretKey);
    if (!hash_equals($hmac, $expectedHash)) {
      throw new \Exception('Bad CRSF token.');
    }
  }

  function createCsrfToken(): string {
    $value = bin2hex(random_bytes(16));
    $hmac = hash_hmac('sha256', $value, $this->config->secretKey);
    return "$value $hmac";
  }

}
