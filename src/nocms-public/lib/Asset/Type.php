<?php

namespace NoCms\Asset;

class Type {
  function __construct(
    public readonly string $typeName,
    public readonly bool $isHtml,
    public readonly string $ext,
  ) {}

}
