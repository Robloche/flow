function test(this: interface {length: number}, a: string, b: string): number {
  return this.length; // expect []/"" this
}

test.apply("", "foo"); // error: string ~> object
declare class MyArrayLike<T> {
  +[index: number]: T;
  @@iterator(): Iterator<T>;
  length: number;
}
var x = new MyArrayLike<string>();
test.apply("", x);
var y = new MyArrayLike<number>();
test.apply("", y); // error: number ~> string

function * gen() {
  yield "foo";
  yield "bar";
}

test.apply([], gen()); // error: iterable ~> array-like
