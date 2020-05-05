const dispatch = (action, payload) => {
  payload.y.y.d
  payload.y.y.d
  payload.y.y.d
  payload.y.y.d
  payload.y.y.d
  payload.y.y.d
  payload.y.y.d
  payload.y.y.d
  payload.y.y.d
  payload.y.y.d
  return payload.y.y.d
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
