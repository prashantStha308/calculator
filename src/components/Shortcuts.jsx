const Shortcuts = () => {

    const shortcuts= [
        {
            keys: [ 'E' ],
            action: "Expand Calculator"
        },
        {
            keys: [ 'W' , '↑' ],
            action: "Navigate to Previous Entry"
        },
        {
            keys:[ 'S' , '↓' ],
            action: "Navigate to Next Entry"
        }
    ]

  return (
    <ul className="hidden md:grid gap-4 text-sm select-none bg-gray-900/60 px-2 py-5 rounded-xs">
        {
            shortcuts.map( ( item , index ) =>{
                return(
                    <li key={ index }>
                        {
                            item.keys.map( (key , kIndex) => (
                                <span key={ kIndex + index } className="shortcut-keys">
                                    { key }
                                </span>
                            ))
                        }
                        { item.action }
                    </li>
                )
            })
        }
    </ul>
  )
}

export default Shortcuts;