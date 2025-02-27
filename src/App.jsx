import Pad from "./components/Pad"
import Screen from "./components/Screen.jsx";
import { useState , useEffect } from "react";
import calc from "./utility/calculator.js";

const App = () => {
  const [ input , setInput ] = useState([]);
  const [ history , setHistory ] = useState([]);

  const updateHistory = ()=>{
    setHistory(calc.getHistory().slice(-4));
  }

  useEffect( ()=>{
    updateHistory();
  }, [] )

  return (
    <main className="main-app">
      <div className="calculator">
        <Screen input={input} history={history} />
        <Pad setInput={setInput} updateHistory={updateHistory} />
      </div>
    </main>
  )
}

export default App