import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Cryp from './page/Crypto';
import LocalStorage from './page/LocalStorage';

function App() {
  return (
    <>
      <Link to="/">🏠Home</Link> |{""}
      <Link to="/crypto">😊Crypto</Link> |{""}
      <Link to="/localstorage">✋LocalStorage</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto" element={<Cryp />} />
        <Route path="/localstorage" element={<LocalStorage />} />
      </Routes>
    </>

  );
}

export default App;