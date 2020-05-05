const dispatch = (action, payload) => {
  const a = payload.y.y.a
  const b = payload.y.y.b
  const c = payload.y.y.c
  const d = payload.y.y.d
  const e = payload.y.y.e
  a
  b
  c
  d
  e
  a
  b
  c
  d
  e
  a
  b
  c
  d
  e
  return d
};

const count = 1000 * 1000 * 1000;

const loop = (payload, base, type) => {
  const engine = `${type} engine`
  console.time(engine);
  for (let i = 0; i < count; i++) {
    const p = payload[i & base];
    dispatch(p.x, p);
  }
  console.timeEnd(engine);
};

module.exports = {
  loop
};
