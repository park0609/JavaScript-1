function fn (...arr){ // 나머지 매개변수 차이는 함수를 만들때면 매개변수 안에 들어가면 전개연산자
    console.log(...arr) // 전개연산자
}
fn(1,2,3,4,5,6)