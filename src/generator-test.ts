function* createGen(): Generator<"start" | number | undefined, number, number> {
  yield "start";
  const a: number = yield;
  return a;
}

const gen = createGen();

console.log(gen.next());
console.log(gen.next(3));
console.log(gen.next(2));

export { createGen };
