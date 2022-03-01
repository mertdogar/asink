export const wait = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const randomInt = (min, max) => {
  return Math.round((Math.random() * (max - min)) + min);
}