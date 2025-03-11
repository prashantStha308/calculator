/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

const Screen = ({ input = [] , setInput, history = [] }) => {
  const inputRef = useRef(null);
  const historyListRef = useRef(null);

  const handelInput = ( e )=>{

    const value = e.target.value.split("");
    setInput(value);
  }

  const handleKeyDown = (e) => {
    const allowedChars = "0123456789+-*/%^().";
    const controlKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Home",
      "End",
      "Tab",
    ];

    if (!allowedChars.includes(e.key) && !controlKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect( ()=>{
    if( historyListRef.current ){
      historyListRef.current.scrollTop = historyListRef.current.scrollHeight;
    }
  } , [ input ] )


  return (
    <section className="grid gap-2 max-w-sm min-h-32 px-4 py-2">

      {/* History */}
      <ul id="history-list" ref={historyListRef} className="text-gray-400 text-sm h-20 text-right overflow-y-scroll pr-2">
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Input */}
      <div className="relative text-gray-100 text-lg text-right w-full">
        <input
          ref={inputRef}
          type="text"
          value={input.join("")}
          onChange={handelInput}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent outline-none border-none text-right caret-transparent pr-2"
          autoFocus
        />
        <span className="cursor">
          |
        </span>
      </div>
    </section>
  );
};

export default Screen;
