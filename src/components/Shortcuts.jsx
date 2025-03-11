import { FaArrowUp , FaArrowDown } from "react-icons/fa";


const Shortcuts = () => {

    const shortcuts= [
        {
            keys: [ 'E' ],
            action: "Expand/Shrink Calculator"
        },
        {
            keys: [ 'W' , <FaArrowUp /> ],
            action: "Navigate to Previous Entry"
        },
        {
            keys:[ 'S' , <FaArrowDown /> ],
            action: "Navigate to Next Entry"
        }
    ]

  return (
    <ul className="hidden md:grid gap-4 text-sm select-none bg-gray-800/60 px-2 py-5 rounded-xs">
        {
            shortcuts.map( ( item , index ) =>{
                return(
                    <li key={ index } className="flex gap-2 justify-start items-center">
                        {
                            item.keys.map( (key , kIndex) => (
                                <span key={ kIndex + index } className="shortcut-keys">
                                    { key }
                                </span>
                            ))
                        }
                        : { item.action }
                    </li>
                )
            })
        }
    </ul>
  )
}

export default Shortcuts;