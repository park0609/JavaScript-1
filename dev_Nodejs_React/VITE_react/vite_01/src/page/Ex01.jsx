const Inp = () => {
    // localStorage CRUD

    // Create 입력
    // localStorage.setItem('test2', "ㅎㅇㅎㅇ") // set은 인자2개, test가 뒤에 문장을 받음
    const data = { id: 1, name: "홍길동", comment: "아버지를 아버지라 부를수없고" }
    const jdata = JSON.stringify(data)
    localStorage.setItem('test3', jdata)

    // Read 읽기
    const readData = localStorage.getItem("test3") //get은 인자 1개
    const obData = JSON.parse(readData)

    // Delete 삭제
    localStorage.removeItem('test3')
    // 모두 삭제(조심히 사용)
    // localStorage.clear
    return (
        <>
            <h1>불러왔습니다.</h1>
            <h2>{obData.id}</h2>
            <h2>{obData.name}</h2>
            <h2>{obData.comment}</h2>
        </>
    )
}

export default Inp 