import Button from "./Button";

const Pad = ({ setInput, updateHistory }) => {
  const rows = [
    ['C', '\ue14a', '%', '÷'],
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    ['00', 0, '.', '=']
  ];

  return (
    <section className="">
      <table className="m-auto cursor-pointer">
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((sym, colIndex) => (
                <td key={`${sym}-${rowIndex}-${colIndex}`}>
                  <Button item={sym} setInput={setInput} updateHistory={updateHistory} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Pad;
