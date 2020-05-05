const { loop } = require('./utils')

const p1 = { x: "x1", y: {y: { x: "x1", a: "x" }, x: "x1", a: "x" } };
const p2 = { x: "x2", y: {y: { x: "x2", b: "y" }, x: "x2", b: "y" } };
const p3 = { x: "x3", y: {y: { x: "x3", c: "z" }, x: "x3", c: "z" } };
const p4 = { x: "x4", y: {y: { x: "x4", d: 200 }, x: "x4", d: 200 } };
const p5 = { x: "x5", y: {y: { x: "x5", e: true }, x: "x5", e: true } };
const p6 = { x: "x6", y: {y: { x: "x6", f: null }, x: "x6", f: null } };
const p7 = { x: "x7", y: {y: { x: "x7", g: {} }, x: "x7", g: {} } };

let payload = [p1, p2, p3, p4, p5, p6, p7];
let base = payload.length - 1

loop(payload, base, 'mono')

