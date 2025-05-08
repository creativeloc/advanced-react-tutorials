import { useState } from "react"

const CodeExample = () => {
  const [value, setValue] = useState(0)

  return (
    <div>
      <h1>Value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  )
}
export default CodeExample
