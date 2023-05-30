# NoCMS

NoCMS is a just a web-based editor for files in a single directory. You, the developer,
creates the files. The user can edit them. Your site can use them as you like.

# Setup

```
cp config.example.php config.php
cp static/index.example.css index.css
```

In `config.php` place a strong random key in `jwtSecretKey`.

```
compose install
```

Submit your password at `http://example.com/nocms/` to get a hash.

In `config.php` place the hash in `pwdHash`.
