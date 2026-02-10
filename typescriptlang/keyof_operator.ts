// keyof operator -> takes an object type,
// produces a string or numeric literal union of its keys

// example: type P is the same type as P = "x" | "y"
type Point = {x: number; y: number};
type P = keyof Point;

// if type has string or number index signature, keyof will return those instead
type Arrayish = { [n: number]: unknown};
type A = keyof Arrayish;

// type A = number

type Mapish = { [k: string]: boolean};
type M = keyof Mapish;

// type M = string | number
// because js object keys are coerced to string