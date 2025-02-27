import calc from "../utility/calculator.js";

const Button = ({ item , setInput , updateHistory }) => {

  return (
    <div className={`px-4 py-2 rounded-md bg-gray-700 mx-1 my-1 text-lg text-center ${ typeof(item) == "number" || item === "00" ? "text-gray-100" : "text-yellow-400"} hover:bg-gray-800 transition-all duration-150 ease-in-out select-none `}
      onClick={
        ()=>{
          if (item === "=") {
            const result = calc.evaluate(); // Store result
            setInput([result]); // Set input as an array containing the result
            updateHistory();
          } else if( item === '\ue14a' ){
            calc.backspace();
            setInput( [...calc.getExpression()] );
          }else {
            let value = item;
            if (item === "x") value = "*";
            if (item === "÷") value = "/";
            if ( item === 'C' ) value = " ";
  
            calc.appendDigit(value);
  
            setInput( prev => [...prev , item] );
            if ( item === 'C' ){
              setInput([]);
              calc.clearExpression();
            }
          }
        }
      }
    >
        {item}
    </div>
  )
}

export default Button;