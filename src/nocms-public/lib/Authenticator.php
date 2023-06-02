<?php

namespace NoCms;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use NoCms\Authenticator\Result;

class Authenticator {

  function __construct(
    private readonly Config $config,
  ) {}

  /**
   * Require the user to be logged in. If not, display a login form.
   *
   * @return AuthenticateResult
   */
  function authenticate() {
    $ret = new Result();
    $h = escaper();

    if (!empty($_POST['nocms-logout'])) {
      assertNotCsrf();
      $this->logout();
      $ret->location = $this->config->siteHome . "?loggedOut=1";
      $ret->statusCode = 302;
      $ret->headline = $this->config->adminSiteName . " : Logged out";
      $ret->message = "<p>You are logged out.</p>";
      return $ret;
    }

    $pwd = (string) ($_POST['nocms-pwd'] ?? '');
    $jwt = rawurldecode((string) ($_COOKIE['nocms-jwt'] ?? ''));

    if (!$this->config->secretKey) {
      $ret->statusCode = 500;
      $ret->headline = $this->config->adminSiteName . " : Setup";
      $ret->message = '<p><code>secretKey</code> not set.</p>';
      return $ret;
    }

    $setPwdForm = <<<EOD
      <form action='' method=POST class="form-horizontal">
        <div class="form-group">
          <label for='nocms-pwd' class="col-sm-2 control-label">New password</label>
          <div class="col-sm-10">
            <input type=password name='nocms-pwd' id='nocms-pwd' class="form-control" />
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type=submit class="btn btn-default">Set password</button>
          </div>
        </div>
      </form>
    EOD;
    $loginForm = <<<EOD
      <form action='' method=POST class="form-horizontal">
        <div class="form-group">
          <label for='nocms-pwd' class="col-sm-2 control-label">Password</label>
          <div class="col-sm-10">
            <input type=password name='nocms-pwd' id='nocms-pwd' class="form-control" />
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type=submit class="btn btn-default">Log in</button>
          </div>
        </div>
      </form>
    EOD;

    if (!$this->config->getUser()->pwdHash) {
      // Help set up.
      if ($pwd) {
        // Give the new hash.
        $hash = password_hash($pwd, PASSWORD_BCRYPT);

        $ret->statusCode = 500;
        $ret->headline = $this->config->adminSiteName . " : Setup";
        $ret->message = "<p>Set <code>pwdHash</code> to: <code>{$h($hash)}</code></p>";
        return $ret;
      }

      $ret->statusCode = 500;
      $ret->headline = $this->config->adminSiteName . " : Setup";
      $ret->message = $setPwdForm;
      return $ret;
    }

    if ($pwd) {
      // Trying to log in.
      if (!password_verify($pwd, $this->config->getUser()->pwdHash)) {
        $ret->statusCode = 400;
        $ret->headline = $this->config->adminSiteName . ' : Login';
        $ret->message = "<p>Bad password. Try again.</p> $loginForm";
        return $ret;
      }

      // Success, put jwt in cookie.
      $jwt = JWT::encode([], $this->config->secretKey, 'HS256');

      $cookiePath = $_SERVER['REQUEST_URI'];
      [$cookiePath] = explode('?', $cookiePath);
      setcookie('nocms-jwt', rawurlencode($jwt), 0, $cookiePath);

      $ret->location = $_SERVER['REQUEST_URI'];
      $ret->statusCode = 302;
      $ret->headline = $this->config->adminSiteName. " : Login";
      $ret->message = "<p>You are logged in.</p>";
      return $ret;
    }

    if ($this->isAuthenticated()) {
      $ret->authenticated = true;
      return $ret;
    }

    $ret->headline = $this->config->adminSiteName . " : Login";
    $ret->message = $loginForm;
    return $ret;
  }

  function isAuthenticated(): bool {
    $jwt = rawurldecode((string) ($_COOKIE['nocms-jwt'] ?? ''));
    if (!$jwt) {
      return false;
    }

    try {
      JWT::decode($jwt, new Key($this->config->secretKey, 'HS256'));
      return true;
    } catch (\Exception $e) {
      return false;
    }
  }

  /**
   * Remove the authentication cookie.
   */
  function logout() {
    $cookiePath = $_SERVER['REQUEST_URI'];
    [$cookiePath] = explode('?', $cookiePath);
    setcookie('nocms-jwt', '', 0, $cookiePath);
  }
}

