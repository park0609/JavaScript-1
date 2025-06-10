const books = [
    { id: 101, bookname: "세상에 모든 음식", price: 13000 },
    { id: 102, bookname: "세상에 모든 책", price: 12000 },
    { id: 103, bookname: "세상에 모든 옷", price: 14000 },
    { id: 104, bookname: "세상에 모든 차", price: 17000 }
]


const Books = () => {
    return (
        <>
            <ul>

                {books.map(v => <li key={v.key}>{v.bookname}({v.price})원</li>)}

            </ul>
        </>
    )
}

export default Books