<?php

namespace NoCms;

use NoCms\Asset\Type as AssetType;

class Asset {

  protected $file;
  protected $meta = [];

  private function __construct($file, $meta = []) {
    $this->file = $file;
    $this->meta = $meta;
  }

  static function factory(string $file) {
    if (!is_file($file) || !is_readable($file)) {
      return null;
    }

    $dirname = dirname($file);
    $basename = basename($file);
    if ('.' === $basename[0] || !preg_match(NAME_PATTERN, $basename, $m)) {
      return null;
    }

    $meta = [];

    if (str_ends_with($basename, ".json")) {
      $name = substr($basename, 0, strlen($basename) - 5);

      $schema = $dirname . DIRECTORY_SEPARATOR . ".$name.schema.json";
      $meta['jsonSchema'] = $schema;

      if (!is_file($schema) || !is_readable($schema)) {
        return null;
      }
    }

    return new self($file, $meta);
  }

  function getFile() {
    return $this->file;
  }

  function getBasename() {
    return basename($this->file);
  }

  function getType() {
    return Asset::getAllTypes()
      ->find(fn (AssetType $type) => str_ends_with($this->file, $type->ext));
  }

  /**
   * @return JsArray<AssetType>
   */
  static function getAllTypes() {
    static $types = null;
    if ($types === null) {
      $types = JsArray::from([
        new AssetType(typeName: 'block', isHtml: true, ext: '.block.html'),
        new AssetType(typeName: 'text', isHtml: false, ext: '.txt'),
        new AssetType(typeName: 'json', isHtml: false, ext: '.json'),
      ]);
    }
    return $types;
  }

  function getTitle() {
    $ext = $this->getType()->ext;

    $beforeExt = substr($this->getBasename(), 0, - strlen($ext));
    $title = preg_replace('@([a-z])_([a-z])@i', '$1 $2', $beforeExt);

    return ucwords($title);
  }

  function getContent() {
    return file_get_contents($this->file);
  }

  function getJsonSchema() {
    if (empty($this->meta['jsonSchema'])) {
      return "";
    }

    return file_get_contents($this->meta['jsonSchema']);
  }

  function output() {
    readfile($this->file);
  }

  function update(string $content) {
    $numBackups = getConfig()->numBackups;
    if ($numBackups) {
      // store current rev
      copy($this->file, $this->file . $_SERVER['REQUEST_TIME']);

      $revPattern = '@^' . preg_quote($this->getBasename(), '@') . '\\d+$@';
      // count backups newest to eldest
      $revCount = 0;
      foreach (scandir(dirname($this->file), 1) as $entry) {
        if (!preg_match($revPattern, $entry)) {
          continue;
        }

        $revCount++;
        if ($revCount <= $numBackups) {
          continue;
        }

        unlink(dirname($this->file) . DIRECTORY_SEPARATOR . $entry);
      }
    }

    return file_put_contents($this->file, $content);
  }

}
