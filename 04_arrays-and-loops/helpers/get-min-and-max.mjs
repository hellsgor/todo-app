export function getMinMax(data) {
  let min, max;
  if (data.n < data.m) {
    min = data.n;
    max = data.m;
  } else if (data.n >= data.m) {
    min = data.m;
    max = data.n;
  }
  return {min, max};
}
