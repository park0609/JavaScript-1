const a = [1,2]
const b = [3,4]
// const result = a + b // 안됨 스트링형식으로 더해짐
const result = [...a, ...b] // 배열의 덧셈방법
console.log(result, typeof(result))

console.log(result, Array.isArray(result))