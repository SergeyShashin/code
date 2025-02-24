export function root2(num) {
  return round(num ** (1 / 2));
}

export function root3(num) {
  return round(num ** (1 / 3));
}

export function pow2(num) {
  return num ** 2;
}

export function pow3(num) {
  return num ** 3;
}

export function pow4(num) {
  return num ** 4;
}

function round(num) {
  return num.toFixed(2);
}