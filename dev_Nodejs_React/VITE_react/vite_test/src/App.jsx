import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Test2 from './page/Test2'
import Home from './page/Home'
import Test1 from './page/Test1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      | {" "}
      <Link to="/">Home</Link> | {" "}
      <Link to="/test1">Test1</Link> | {" "}
      <Link to="/test2">Test2</Link> | {" "}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test1' element={<Test1 />} />
        <Route path='/test2' element={<Test2 />} />
      </Routes>
    </>
  )
}

export default App
