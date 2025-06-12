import { useState } from "react"
import list from "./list"


const CheckBox = () => {
    const [check, setCheck] = useState({ "HTML": false, "CSS": false, "JAVA": false, "PYTHON": false, "Oracle": false, "MySQL": false, "Nodejs": false })
    const HandleCheck = e => {
        const { value, checked } = e.target
        setCheck(data => {
            return {
                ...data, [value]: checked //전달받은 데이터가 여러개이고 그걸 동시 출력할려면 기존 값을들 풀어해쳐 업데이트함
            }
        })
    }




    return (
        <>
            <h1>6. 체크박스값 확인</h1>
            <h4>{JSON.stringify(check)}</h4>
            {list.map((v, i) => {
                return (
                    <span key={i}>
                        <input type="checkbox" onChange={HandleCheck} value={v} />{v} {"  "}
                    </span>
                )
            })}

            <ol style={{ "listStylePosition": "inside" }}>
                {list
                    .filter(ck => check[ck]) // true값만 출력시키게 함 (fillter함수 사용)
                    .map((v) => <li>{v}</li>)
                }
            </ol>
        </>
    )
}
export default CheckBox