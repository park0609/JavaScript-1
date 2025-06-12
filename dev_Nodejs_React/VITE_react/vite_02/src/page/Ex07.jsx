import "./Ex07.css"
import myStyle2 from "./Ex07.module.css"

const CSS = () => {

    const myStyle1 = { width: "200px", height: "200px", borderRadius: "50%", backgroundColor: "green" }

    return (
        <>
            <h1>7. React에 CSS스타일 적용하기</h1>
            <div style={myStyle1}></div>
            <div style={{ ...myStyle1, backgroundColor: "blue" }}></div>
            <div className="ex7-div"></div>
            <ul>
                <li>아래는 모듈형 스타일 적용</li>
            </ul>
            <div className={myStyle2["ex7-div"]}></div>
            <ul>
                <li>적용됨요</li>
            </ul>
            <div className={myStyle2["ex7ex7"]}></div>
        </>
    )
}
export default CSS