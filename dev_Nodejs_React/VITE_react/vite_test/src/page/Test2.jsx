import { useState } from "react"
import axios from "axios"
import Fdata from './List'
const Test2 = () => {
    const [indata, setIndata] = useState({ name: " ", age: " ", memo: " " })
    const [pull, setPull] = useState("")
    const [number, setNumber] = useState(0)

    const fdata = List

    const HandleIndata = e => {
        setIndata(pre => ({ ...pre, [e.target.name]: e.target.value }))
    }

    const Indata = () => axios.post("/data", indata).then((res) => console.log(res.data))
    const Api = () => axios.get("api").then((res) => setPull(res.data))




    return (
        <>
            <h1>Test</h1>
            <hr />
            <h2>1번 문제</h2>
            <label htmlFor="">이름 : </label>
            <input type="text" name="name" onChange={HandleIndata} value={indata.name} /> {" "}
            <label htmlFor="">나이 : </label>
            <input type="text" name="age" onChange={HandleIndata} value={indata.age} /> {" "}
            <label htmlFor="">메모 : </label>
            <input type="text" name="memo" onChange={HandleIndata} value={indata.memo} /> {" "}
            <button onClick={Indata}>전송</button>
            <hr />
            <div>{`${indata.name}님 / ${indata.age * 1 + 1}살 / ${indata.memo}라고 하셨습니다`}</div>
            <hr />
            <button onClick={Api}>받기</button>
            <div>{JSON.stringify(pull)}</div>
            <hr />
            <button onClick={() => setNumber(number + 1)}>과일</button>
            <div>{number == (number % 2 == 0) ? fdata : ""}</div>
            <hr />
        </>
    )
}
export default Test2