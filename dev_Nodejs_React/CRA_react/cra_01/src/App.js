import logo from './logo.svg';
import './App.css';

function App() {
  const pop = () => alert("격하게 반갑스빈다")
  return (
    <>
      <h1>CRA로 처음 리액트를 시작하빈다.</h1>
      <button onClick={pop}>처음 인사</button>
    </>
  );
}

export default App;
