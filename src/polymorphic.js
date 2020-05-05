const { loop } = require('./utils')

const p1 = { x: "x1", a:"a" };
const p2 = { x: "x2", a:"a" };
const p3 = { x: "x3", b: true };
const p4 = { x: "x4", b: false };
const p5 = { x: "x5", c: 100 };
const p6 = { x: "x6", c: 400 };
const p7 = { x: "x7", c: 500 };

let payload = [p1, p2, p3, p4, p5, p6, p7];
let base = payload.length - 1

loop(payload, base, 'poly')

