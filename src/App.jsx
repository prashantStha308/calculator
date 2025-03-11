import Pad from "./components/Pad";
import Screen from "./components/Screen.jsx";
import { useState, useEffect } from "react";
import calc from "./utility/calculator.js";
import Shortcuts from "./components/Shortcuts.jsx";

const App = () => {
  const [input, setInput] = useState([]);
  const [history, setHistory] = useState([]);
  const [advancedMode, setAdvancedMode] = useState(false);

  const updateHistory = () => {
    setHistory(calc.getHistory());
  };

  useEffect( ()=>{
    updateHistory();
  } , [] )

  const [historyIndex, setHistoryIndex] = useState( history.length );


  useEffect( ()=>{
    return setHistoryIndex( history.length );
  } , [ setHistoryIndex , history ] )

  useEffect(() => {

    const handleKeyDown = (e) => {

      if( !history || history.length <=0 ) return;

      // Debug logs
      console.log( "History:", history );
      console.log( "HistoryIndex:", historyIndex );
      console.log( "History length:", history.length );

      if( e.key === 'e' ){
        setAdvancedMode( prev => !prev );
      }
      else if( e.key === 'w' || e.key === 'ArrowUp' ){
        setHistoryIndex( prevIndex => {
          const newIndex = Math.max( 0 , prevIndex - 1 );
          const currentInput = history[newIndex];

          if( typeof(currentInput) === "string" ){
            setInput( history[newIndex].split("") );
          }
          
          return newIndex;
        } )
      }
      else if( e.key === 's' || e.key === 'ArrowDown' ){
        setHistoryIndex( prevIndex =>{
          const newIndex = Math.min( prevIndex + 1 , history.length - 1 );
          const currentInput = history[newIndex];

          if( typeof(currentInput) === "string" ){
            setInput( history[newIndex].split("") );
          }

          return newIndex;
        } )
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [ history , historyIndex ]);

  return (
    <main className="main-app">
      <div className="calculator">
        <Screen input={input} setInput={setInput} history={history} />
        <Pad input={input} setInput={setInput} updateHistory={updateHistory} advancedMode={advancedMode} setAdvancedMode={setAdvancedMode} setHistoryIndex={setHistoryIndex}  />
      </div>

      <section className="absolute bottom-4 left-8" id="shortcut-display">
        <Shortcuts />
      </section>
    </main>
  );
};

export default App;
