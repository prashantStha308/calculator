/* eslint-disable react/prop-types */

import Button from "./Button";
import { IoBackspaceOutline } from "react-icons/io5";
import { FaExpandAlt } from "react-icons/fa";
import { AiOutlineShrink } from "react-icons/ai";

const Pad = ({ input , setInput, updateHistory , advancedMode , setAdvancedMode , setHistoryIndex  }) => {

  const toggleAdvancedMode = ()=> setAdvancedMode(!advancedMode);

  const backspace = {
    element: <IoBackspaceOutline key={"backspace"} className="text-2xl" />,
    name: "backspace"
  };
  const expand = {
    element: <FaExpandAlt key={"expand"} className="text-xl" />,
    name: "expand"
  };
  const shrink = {
    element: <AiOutlineShrink key={"shrink"} className="text-2xl" />,
    name: "shrink"
  };
  const xPowY = {
    element: <span>x<sup>y</sup></span>,
    name:"xPowY"
  };

  // Default pad
  const dRows = [
    ['AC', backspace , '%', '÷'],
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [ expand , 0, '.', '=']
  ];

  // Advanced Pad
  const advRows = [
    [ '2nd' , 'deg' , 'sin' , 'cos' , 'tan' ],
    [ xPowY , 'lg' , 'ln' , '(' , ')' ],
    [ '√x' , 'AC' , backspace , '%', '÷' ],
    [ 'x!' , 7, 8, 9, 'x' ],
    [ '½' , 4 , 5 , 6 , '-' ],
    [ 'π' , 1 , 2 , 3 , '+' ],
    [ shrink , 'e' , 0 , '.' , '=' ]
  ];

  return (
    <section className="">
      <table className="m-auto cursor-pointer">
        <tbody>

          {
            advancedMode ?
            advRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((sym, colIndex) => (
                  <td key={`${sym}-${rowIndex}-${colIndex}`}>
                    <Button input={input} item={sym} setInput={setInput} updateHistory={updateHistory} toggleAdvancedMode={ toggleAdvancedMode } setHistoryIndex={setHistoryIndex} history={history} />
                  </td>
                ))}
              </tr>
            ))
            :
            dRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((sym, colIndex) => (
                  <td key={`${sym}-${rowIndex}-${colIndex}`}>
                    <Button item={sym} setInput={setInput} updateHistory={updateHistory} toggleAdvancedMode={ toggleAdvancedMode } setHistoryIndex={setHistoryIndex} history={history} />
                  </td>
                ))}
              </tr>
            ))
          }

        </tbody>
      </table>
    </section>
  );
};

export default Pad;
