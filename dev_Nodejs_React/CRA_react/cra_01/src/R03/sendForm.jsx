import { useState } from "react"

const SendForm = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState("남자");
    const changeName = (e) => setName(e.target.value)
    const changeGender = (e) => setGender(e.target.value)
    const HandleSubmit = event => {
        alert(`등록하신분의 이름 : ${name} / 성별 : ${gender} 입니다.`)
        event.preventDefault() // form 제출시 새로고침 방지
    }
    return (
        <>
            <form action="" onSubmit={HandleSubmit}>
                <label htmlFor="">이름</label>
                <input type="text" value={name} onChange={changeName} />
                <hr />
                <label htmlFor="">성별</label>
                <select name="" id="" value={gender} onChange={changeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
                <input type="submit" value="제출" />
            </form>
        </>
    )

}
export default SendForm