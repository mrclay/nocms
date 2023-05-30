# NoCMS

NoCMS is a just a web-based editor for premade files in a single directory. 

Create some HTML, text, and JSON (with JSONSchema) files inside `content`. The user can log in and edit them. The site can use them for content/settings.

## Features

* HTML fragments edited with CKEditor
* JSON edited/validated client-side by react-jsonschema-form
* A specified number of timestamped backups are kept on disk
* Predictable filenames in `content` directory for use in your site/app
* Auth system simple to integrate into something else

## Requirements

* PHP 8
* Composer

## Sample docker-compose setup

```
compose install
docker compose up -d
```

Load http://localhost:8080/nocms/install.php to generate a config file.

Load http://localhost:8080/nocms/ and give a password to get a hash.

Place the hash into `nocms-public/nocms-config.php` to allow authentication.

Reload http://localhost:8080/nocms/ and log in.

## Setup

```
compose install
```

Place directories `nocms-private` and `nocms-public` on your webserver.

Place `vendor` inside `nocms-private`.

**Tip:** Ideally place `nocms-private` outside the DocumentRoot.

Load http://example.com/nocms-public/install.php to generate a config file.

**Warning!** If you don't see `nocms-public/nocms-config.php` on the filesystem, installation has failed.

Load http://example.com/nocms-public/ and give a password to get a hash.

Place the hash into `nocms-public/nocms-config.php` to allow authentication.

Reload http://example.com/nocms-public/ and log in.

## Security

The good: Password auth is done via `password_verify` and the session is verified via a [JWT](https://github.com/firebase/php-jwt) stored in a cookie. Content edits require POST operations protected by CSRF tokens (HMAC-SHA-256). An attacker who gained entry could not alter PHP files.

The not great: Authentication is single-user. The JWT doesn't expire. There's nothing fancy like IP banning/throttling or user logging. An attacker that gained entry could edit raw HTML/JSON that you possibly display/consume on the site.

**Tip:** For best protection, run NoCMS-edited content through an [HTML sanitizer](https://packagist.org/packages/ezyang/htmlpurifier) before output. Yes, I should probably build this in.
