<?php // Dangerously untested

namespace NoCms;

use ArrayAccess;
use Countable;
use Iterator;

/**
 * @template T
 * @property-read int $length
 * @property-read T[] $items
 */
class JsArray implements ArrayAccess, Countable, Iterator {
  private $items;
  private $position = 0;

  /**
   * @param T[] $items
   */
  function __construct(array $items = []) {
    $this->items = array_values($items);
  }

  function __get(string $name) {
    if ($name === 'length') {
      return count($this->items);
    }
    if ($name === 'items') {
      return $this->items;
    }
  }

  /**
   * @return T|null
   */
  function at(int $idx) {
    if ($idx < 0) {
      $idx = count($idx) + $idx;
    }
    if ($idx < 0 || $idx > (count($idx) - 1)) {
      return null;
    }
    return $this->items[$idx];
  }

  /**
   * @return JsArray<T>
   */
  function concat($arr) {
    if ($arr instanceof JsArray) {
      $arr = $arr->items;
    }
    return new self([...$this->items, ...$arr]);
  }

  function count(): int {
    return count($this->items);
  }

  function current(): mixed {
    return $this->items[$this->position] ?? null;
  }

  /**
   * @return JsArray<[T, int]>
   */
  function entries() {
    return $this->mapIdx(fn ($el, $idx) => [$el, $idx]);
  }

  /**
   * @param callable(T): bool $func
   * @return bool
   */
  function every(callable $func) {
    foreach ($this->items as $item) {
      if (!$func($item)) {
        return false;
      }
    }
    return true;
  }

  /**
   * @param callable(T): bool $func
   * @return JsArray<T>
   */
  function filter(callable $func): self {
    return new self(array_filter($this->items, $func));
  }

  /**
   * @return JsArray<T>
   */
  function filterIdx(callable $func): self {
    $out = [];
    foreach ($this->values() as $idx => $item) {
      if ($func($item, $idx)) {
        $out[] = $item;
      }
    }
    return new self($out);
  }

  /**
   * @return T|null
   */
  function find(callable $func, $notFoundValue = null) {
    foreach ($this->items as $item) {
      if ($func($item)) {
        return $item;
      }
    }

    return $notFoundValue;
  }

  /**
   * @return int
   */
  function findIndex(callable $func) {
    foreach ($this->items as $idx => $item) {
      if ($func($item)) {
        return $idx;
      }
    }

    return -1;
  }

  /**
   * @return bool
   */
  function includes($search) {
    return in_array($search, $this->items, true);
  }

  /**
   * @return int
   */
  function indexOf($search) {
    return array_search($search, $this->items, true);
  }

  /**
   * @return bool
   */
  static function isArray($value) {
    return $value instanceof self;
  }

  /**
   * @param T[] $arrayLike
   * @return JsArray<T>
   */
  static function from($arrayLike) {
    return new self((array) $arrayLike);
  }

  /**
   * @param callable(T): void $func
   */
  function forEach(callable $func) {
    $this->map($func);
  }

  /**
   * @param callable(T, int): void $func
   */
  function forEachIdx(callable $func) {
    $this->mapIdx($func);
  }

  /**
   * @return string
   */
  function join($sep = ',') {
    return implode($sep, $this->map(fn($el) => (string) $el)->items);
  }

  function key(): mixed {
    return $this->position;
  }

  /**
   * @return JsArray<int>
   */
  function keys() {
    return $this->mapIdx(fn ($el, $idx) => $idx);
  }

  /**
   * @return bool
   */
  function some(callable $func) {
    return $this->every(fn ($el) => !$func($el));
  }

  /**
   * @param callable(T): P $name Description
   * @return JsArray<P>
   */
  function map(callable $func): self {
    return new self(array_map($func, $this->items));
  }

  /**
   * @param callable(T, int): P $name Description
   * @return JsArray<P>
   */
  function mapIdx(callable $func): self {
    $out = [];
    foreach ($this->values() as $idx => $item) {
      $out[] = $func($item, $idx);
    }
    return new self($out);
  }

  function next(): void {
    ++$this->position;
  }

  /**
   * @return JsArray
   */
  function of() {
    return new self(func_get_args());
  }

  function offsetSet($idx, $value): void {
    if ($idx === null) {
      $this->items[] = $value;
      return;
    }

    if ($idx < 0) {
      $idx = count($idx) + $idx;
    }
    if ($idx < 0 || $idx > (count($idx) - 1)) {
      return;
    }

    $this->items[$idx] = $value;
  }

  function offsetExists($idx): bool {
    return isset($this->items[$idx]);
  }

  function offsetUnset($idx): void {
    unset($this->items[$idx]);
    $this->items = array_values($this->items);
  }

  function offsetGet($idx): mixed {
    return $this->at($idx);
  }

  /**
   * @return T|null
   */
  function pop() {
    $ret = array_pop($this->items);
    return $ret;
  }

  /**
   * @return int
   */
  function push() {
    return array_push($this->items, ...func_get_args());
  }

  function reduce(callable $func, $initial) {
    return array_reduce($this->items, $func, $initial);
  }

  function reduceRight(callable $func, $initial) {
    return array_reduce(array_reverse($this->items), $func, $initial);
  }

  /**
   * @return JsArray<T>
   */
  function reverse() {
    $this->items = array_reverse($this->items);
  }

  function rewind(): void {
    $this->position = 0;
  }

  /**
   * @return T|null
   */
  function shift() {
    return array_shift($this->items);
  }

//  function slice($start = 0, $end = null) {
//    // Negative index counts back from the end of the array — if start < 0, start + array.length is used.
//    // If start < -array.length or start is omitted, 0 is used.
//    // If start >= array.length, nothing is extracted.
//    if ($start >= count($this->items)) {
//      return new self([]);
//    }
//    $idx0 = $start;
//    if ($start < 0) {
//      $idx0 = max(0, $start + count($this->items));
//    }
//    // Negative index counts back from the end of the array — if end < 0, end + array.length is used.
//    // If end < -array.length, 0 is used.
//    // If end >= array.length or end is omitted, array.length is used, causing all elements until the end to be extracted.
//    // If end is positioned before or at start after normalization, nothing is extracted.
//
//
//  }

  /**
   * @return self
   */
  function sort(callable $compare = null) {
    if ($compare) {
      usort($this->items, $compare);
    } else {
      sort($this->items);
    }
    return $this;
  }

  /**
   * @return JsArray<T>
   */
  function toReversed() {
    return new self(array_reverse($this->items));
  }

  /**
   * @return JsArray<T>
   */
  function toSorted(callable $compare = null) {
    return $this->values()->sort($compare);
  }

  /**
   * @return int
   */
  function unshift() {
    return array_unshift($this->items, func_get_args());
  }

  function valid(): bool {
    return isset($this->items[$this->position]);
  }

  /**
   * @return JsArray<T>
   */
  function values() {
    return new self($this->items);
  }

  /**
   * @return JsArray<T>
   */
  function with($idx, $value) {
    $length = count($this->items);
    if ($idx > $length || $idx < - $length) {
      throw new \RangeException();
    }

    $ret = $this->values();
    $ret->offsetSet($idx, $value);
    return $ret;
  }
}
