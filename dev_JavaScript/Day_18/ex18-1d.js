
const user = {name:"홍길동",age:10}
//객체의 키로 값을 읽는법 C
console.log(user.name)
console.log(user["name"])
//객체를 수정하는 법 R
user.gender = "male"
user["address"] = "부산"
//수정하는법 U
user.age = 17
user["name"] = "슈퍼맨"
//삭제 하는법 D
delete user['gender']
//출력하기
console.log(user)

//객체 //Tip이니 외워두자
//const test = {test} //원래뜻은 test:test

const update = {...user , age:20} // 그래서 여기도 user:user라는 뜻 근데 user은 위에 배열이였기에 배열이 담긴다
console.log(update)
