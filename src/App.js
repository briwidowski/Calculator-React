import { useState } from "react"

function App() {
  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")

  const operators = ['/', '*', '-', '+', '=', '.']

  const updateCalc = (value) => {

    if (
      operators.includes(value) && result === "" ||
      operators.includes(value) && operators.includes(calc.slice(-1))
    ) {
      return
    }

    setCalc(calc + value)

    setResult(calc)
  }

  const clearOutput = () => {
    setCalc("")
    setResult("")
  }

  return (
    <div className="container">
      <div className="output">
        { result ? <p>{calc}</p> : ''}
        { calc || "0"}
      </div>
      <div className="buttons-grid">
        <button onClick={() => clearOutput()} className="span-2">AC</button>
        <button>DEL</button>
        <button onClick={() => updateCalc("/")}>÷</button>
        <button onClick={() => updateCalc("7")}>7</button>
        <button onClick={() => updateCalc("8")}>8</button>
        <button onClick={() => updateCalc("9")}>9</button>
        <button onClick={() => updateCalc("*")}>*</button>
        <button onClick={() => updateCalc("4")}>4</button>
        <button onClick={() => updateCalc("5")}>5</button>
        <button onClick={() => updateCalc("6")}>6</button>
        <button onClick={() => updateCalc("-")}>-</button>
        <button onClick={() => updateCalc("1")}>1</button>
        <button onClick={() => updateCalc("2")}>2</button>
        <button onClick={() => updateCalc("3")}>3</button>
        <button onClick={() => updateCalc("+")}>+</button>
        <button onClick={() => updateCalc("0")} className="span-2">0</button>
        <button onClick={() => updateCalc(".")}>.</button>
        <button>=</button>
      </div>
    </div>
  );
}

export default App;
