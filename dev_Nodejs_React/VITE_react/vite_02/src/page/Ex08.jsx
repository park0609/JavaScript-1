import { useState } from "react"
import "./Ex07.css"

let i = 0
const TodoList = () => {
    const [indata, setIndata] = useState('')
    const [arr, setArr] = useState([])
    const LSdata = JSON.stringify(indata)

    const handleInput = e => {
        setIndata(e.target.value)
    }
    const handleAdd = () => {
        setArr([...arr, indata])
        localStorage.setItem(i, LSdata)
    }
    const handleKeyDownAdd = e => {
        if (e.key === "Enter") {
            console.log(i)
            setArr([...arr, indata])
            localStorage.setItem(i++, LSdata)
        }
    }

    return (
        <>
            <h1>8. Arr를 활용한 TodoList</h1>
            <label htmlFor="inin">배열요소 입력 : </label>
            <input type="text" id="inin" onChange={handleInput} onKeyDown={handleKeyDownAdd} value={indata} />
            <button onClick={handleAdd} >추가</button>
            <button disabled={!(arr.length > 0)}>삭제</button>
            <div>{indata}</div>
            <hr />
            {/* <div>{arr}</div> */}
            {arr.map((v, i) => {
                return (
                    <div key={i} className="div-check">
                        <input type="checkbox" />
                        {`${i + 1}. ${v}`}
                    </div>
                )
            })}
        </>
    )
}
export default TodoList