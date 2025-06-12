import { useState } from 'react'
import { Link, Routes, Route, UNSAFE_ServerMode } from 'react-router-dom'
import Home from "./page/Home"
import CSS from "./page/Ex07"
import TodoList from './page/Ex08'
import './App.css'
import Eff from './page/Ex09'
import FetchData from './page/Ex10'
import UseM from './page/Ex11'
import Table from './page/Ex12'
import Ball from './page/Ex13'
import Axi from './page/Ex14'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      | {" "}
      <Link to="/">Home</Link> | {" "}
      <Link to="/ex07">CSS</Link> | {" "}
      <Link to="/ex08">TodoList</Link> | {" "}
      <Link to="/ex09">Eff</Link> | {" "}
      <Link to="/ex10">FetchData</Link> | {" "}
      <Link to="/ex11">useM</Link> | {" "}
      <Link to="/ex12">Table</Link> | {" "}
      <Link to="/ex13">Ball</Link> | {" "}
      <Link to="/ex14">Axi</Link> | {" "}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ex07' element={<CSS />} />
        <Route path='/ex08' element={<TodoList />} />
        <Route path='/ex09' element={<Eff />} />
        <Route path='/ex10' element={<FetchData />} />
        <Route path='/ex11' element={<UseM />} />
        <Route path='/ex12' element={<Table />} />
        <Route path='/ex13' element={<Ball />} />
        <Route path='/ex14' element={<Axi />} />
      </Routes>
    </>
  )
}

export default App
