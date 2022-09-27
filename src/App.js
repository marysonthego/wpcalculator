import {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export const Calculator = () => {
  const  [result, setResult]  =  useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const add = (a,b) => {
      setResult(a + b);
  }
  const subtract = (a,b) => {
    setResult(a - b);
  }

  const multiply = (a,b) => {
    setResult(a * b);
  }

  const divide = (a,b) => {
    setResult (a/b);
  }

  return (
    <div>
    <h1>Calculator</h1>
    <input type="number" id="a" onChange={(e) => setA(parseInt(e.target.value))} />
    <input type="number" id="b" onChange={(e) => setB(parseInt(e.target.value))} />
    <div type="number" id="result">{result}</div>
    <button onClick = {() => {
      add(a, b)}}
      > Add
    </button>
    <button onClick = {() => {
      subtract(a, b)}}
      > Subtract
    </button>
    <button onClick = {() => {
      multiply(a, b)}}
      > Multiply
    </button>
    <button onClick = {() => {
      divide(a, b)}}
      > Divide
    </button>
  </div>
  )

}
export default App;
