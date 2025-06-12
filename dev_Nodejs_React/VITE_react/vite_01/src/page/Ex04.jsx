import { useState } from 'react' // Hook

const Sel = () => {
    const [sel, setSel] = useState('')
    const selector = e => setSel(e.target.value)

    const city = ['서울', '부산', '광주', '대구', '대전', '제주']
    const cNum = ['02', '051', '062', '053', '042', '064']

    return (
        <>
            <h1>2. 셀렉터와 연동</h1>
            <h2><div>{sel}</div></h2>
            <select onChange={selector} value={sel}>
                {
                    city.map((v, i) => {
                        return <option value={cNum[i]} key={i}>{v}</option> // map을 쓸 땐 무조건 return을 해줘라
                    })
                }
            </select>
        </>
    )
}
export default Sel