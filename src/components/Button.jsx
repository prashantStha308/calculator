/* eslint-disable react/prop-types */
import calc from "../utility/calculator.js";

const Button = ({ item , setInput , updateHistory , toggleAdvancedMode }) => {

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
        // perform logic, need to create a span element with a sup element as it's child. Like: <span> x<sup>y</sup> </span>, in backend, use Math.pow( x , y )
        // seems like we can store the whole function in input as eval will evalualte even that function
        break;
    }
  }

  const handelButtonClick = ()=>{
    if (item === "=") {

      const result = calc.evaluate();
      setInput([result]);
      updateHistory();

    }
    else if( typeof(item) === 'object' ){
      handelObjectButtons( item );
    }
    else {

      let value = item;
      if (item === "x") value = "*";
      if (item === "÷") value = "/";

      calc.appendDigit(value);

      setInput( prev => [...prev , item] );
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