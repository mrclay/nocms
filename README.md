# NoCMS

NoCMS is a just a web-based editor for files in a single directory. You, the developer,
create the files. The user can edit them. Your site can use them as you like.

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

Place directories `nocms-private` and `nocms-public` on your weserver.

Place `vendor` inside `nocms-private`.

**Tip:** Ideally place `nocms-private` outside the DocumentRoot.

Load http://example.com/nocms-public/install.php to generate a config file.

**Warning!** If you don't see `nocms-public/nocms-config.php` on the filesystem, installation has failed.

Load http://example.com/nocms-public/ and give a password to get a hash.

Place the hash into `nocms-public/nocms-config.php` to allow authentication.

Reload http://example.com/nocms-public/ and log in.

## Security

The good: Password auth is done via `password_verify` and the session is verified via a [JWT](https://github.com/firebase/php-jwt) stored in a cookie. Content edits require POST operations (naturally CSRF resistant). An attacker who gained entry could not alter PHP files.

The not great: Authentication is single-user. The JWT doesn't expire. There's nothing fancy like IP banning or throttling. An attacker that gained entry could edit raw HTML that you possibly display on the site.

**Tip:** For best protection, run NoCMS-edited content through an [HTML sanitizer](https://packagist.org/packages/ezyang/htmlpurifier) before output. Yes, I should probably build this in.
