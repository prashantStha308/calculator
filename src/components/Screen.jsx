const Screen = ({ input , history=[] }) => {


  return (
    <section className="grid gap-2 max-w-sm min-h-32 justify-end px-4 py-2" >

        <ul className="text-gray-400 text-sm text-right">
          {
            history.map( item => (
              <li key={ crypto.randomUUID() }>
                {item}
              </li>
            ) )
          }
        </ul>

        <div className="text-gray-100 text-lg text-right">
            <p>
              { /* User Entries and Outputs */ }
              {
                input
              }
            </p>
        </div>

    </section>
  )
}

export default Screen