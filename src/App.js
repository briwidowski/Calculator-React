import { useState } from "react"

function App() {
  const [calc, setCalc] = useState("")

  const operators = ['/', '*', '-', '+', '=', '.']

  const updateCalc = (value) => {

    if (
      operators.includes(value) && calc === "" ||
      operators.includes(value) && operators.includes(calc.slice(-1))
    ) {
      return
    }

    setCalc(calc + value)
  }

  const calculate = () => {
    setCalc(eval(calc.toString()) + ' ')
  }

  const clearOutput = () => {
    setCalc("")
  }

  const deleteCharacter = () => {
    if (calc == "") {
      return
    } 

    const newOutput = calc.slice(0, -1)
    setCalc(newOutput)
  }

  return (
    <div className="container">
      <div className="output">
        { calc ? <p>{calc}</p> : "0"}
      </div>
      <div className="buttons-grid">
        <button onClick={() => clearOutput()} className="span-2">AC</button>
        <button onClick={deleteCharacter}>DEL</button>
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
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
