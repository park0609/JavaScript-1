import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './page/Home'
import Inp from './page/Ex01'
import Inp2 from './page/Ex02'
import Inp3 from './page/Ex03'
import Sel from './page/Ex04'
import Radio from './page/Ex05'
import CheckBox from './page/Ex06'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      | {" "}
      <Link to="/">Home</Link> | {" "}
      <Link to="ex01">예제 1</Link> | {" "}
      <Link to="ex02">예제 2</Link> | {" "}
      <Link to="ex03">예제 3</Link> | {" "}
      <Link to="ex04">예제 4</Link> | {" "}
      <Link to="ex05">예제 5</Link> | {" "}
      <Link to="ex06">예제 6</Link> | {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ex01" element={<Inp />} />
        <Route path="ex02" element={<Inp2 />} />
        <Route path="ex03" element={<Inp3 />} />
        <Route path="ex04" element={<Sel />} />
        <Route path="ex05" element={<Radio />} />
        <Route path="ex06" element={<CheckBox />} />
      </Routes>
    </>
  )
}

export default App
