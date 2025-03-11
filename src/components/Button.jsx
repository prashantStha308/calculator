/* eslint-disable react/prop-types */
import calc from "../utility/calculator.js";

const Button = ({ input , item , setInput , updateHistory , toggleAdvancedMode , setHistoryIndex , history }) => {

  const handelObjectButtons = ( element ) => {
    switch( element.name ){

      case "backspace":
        calc.backspace();
        setInput( [...calc.getExpression()] );
        break;
      case "expand":
        toggleAdvancedMode();
        break;
      case "shrink":
        toggleAdvancedMode();
        break;
      case "xPowY":
        calc.appendDigit("^");
        setInput( prev => [...prev , "^" , " " ] );
        break;
    }
  }

  const handelButtonClick = ()=>{
    if (item === "=") {

      const result = calc.evaluate();
      setInput([result]);
      updateHistory();
      setHistoryIndex( history.length - 1 )
      console.log( "History Index:", history.length );

    }
    else if( typeof(item) === 'object' ){
      handelObjectButtons( item );
    }
    else {

      let value = item;
      if (item === "x") value = "*";
      if (item === "÷") value = "/";

      if( item === "sin" || item === "cos" || item === "tan" || item === "ln" || item === "lg" ){
        value = item + "(";
      }

      calc.appendDigit(value);
      setInput( prev => [...prev , value] );

      if ( item === 'AC' ){
        setInput([]);
        calc.clearExpression();

      }
    }
  }

  return (
    <div className={`px-4 py-2 rounded-md bg-gray-700 mx-1 my-1 text-lg text-center ${ typeof(item) == "number" || item === "00" ? "text-gray-100" : "text-yellow-400"} hover:bg-gray-800 ease-in-out select-none active:scale-95 transition-all duration-200" `}
      onClick={handelButtonClick} >
        { typeof( item ) === 'object' ? item.element : item }
    </div>
  )
}

export default Button;