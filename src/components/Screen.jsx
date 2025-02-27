/* eslint-disable react/prop-types */

const Screen = ({ input , history=[] }) => {

  return (
    <section className="grid gap-2 max-w-sm min-h-32 px-4 py-2" >

        <ul className="text-gray-400 text-sm text-right">
          {
            history.map( item => (
              <li key={ crypto.randomUUID() }>
                {item}
              </li>
            ) )
          }
        </ul>

        <div
          className="text-gray-100 text-lg text-right w-full overflow-x-scroll relative"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <p className="whitespace-nowrap">
            { /* User Entries and Outputs */ }

            {/* Need to fix this. Need to make the newer contents visible instead of them going out of screen due to overflow */}
            {input}
            <span className="cursor"> | </span>
          </p>
        </div>

    </section>
  )
}

export default Screen