export default [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function root2(num) {
  return round(num ** 1 / 2)
}

export function root3(num) {
  return round(num ** 1 / 3)
}

export function pow2(num) {
  return num ** 2
}

export function pow4(num) {
  return num ** 4
}

function round(num) {
  return num.toFixed(2)
}

