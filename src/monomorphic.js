const { loop } = require('./utils')

const p1 = { x: "x1", y:"y" };
const p2 = { x: "x2", y:"y" };
const p3 = { x: "x3", y:"y" };
const p4 = { x: "x4", y:"y" };
const p5 = { x: "x5", y: "y" };
const p6 = { x: "x6", y: "y" };
const p7 = { x: "x7", y: "y" };

let payload = [p1, p2, p3, p4, p5, p6, p7];
let base = payload.length - 1

loop(payload, base, 'mono')

