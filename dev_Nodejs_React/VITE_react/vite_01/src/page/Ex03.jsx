import { useState } from "react"

const Inp3 = () => {
    const [in1, setIn1] = useState("")
    const [in2, setIn2] = useState("")


    const handleIn1 = e => setIn1(e.target.value) // 값을 setIn1으로 받아오는 핸들러
    const handleIn2 = e => setIn2(e.target.value) // 값을 setIn2으로 받아오는 핸들러



    return (
        <>
            <h1>1. Input을 이용한 실시간 계산</h1>
            <div>
                <input type="text" value={in1} onChange={handleIn1} /> + {" "}
                <input type="text" value={in2} onChange={handleIn2} /> = {Number(in1) + Number(in2)}
            </div>
            <div>
                <input type="text" value={in1} onChange={handleIn1} /> - {" "}
                <input type="text" value={in2} onChange={handleIn2} /> = {Number(in1) - Number(in2)}
            </div>
            <div>
                <input type="text" value={in1} onChange={handleIn1} /> X {" "}
                <input type="text" value={in2} onChange={handleIn2} /> = {Number(in1) * Number(in2)}
            </div>
            <div>
                <input type="text" value={in1} onChange={handleIn1} /> / {" "}
                <input type="text" value={in2} onChange={handleIn2} /> = {Number(in1) / Number(in2)}
            </div>

            <hr />

            {in1} + {in2} = {Number(in1) + Number(in2)} <br />
            {in1} - {in2} = {Number(in1) - Number(in2)}<br />
            {in1} X {in2} = {Number(in1) * Number(in2)}<br />
            {in1} / {in2} = {Number(in1) / Number(in2)}

        </>
    )
}

export default Inp3