import { useState } from "react"

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    // setValue(value + 1)
    setValue((currentState) => {
      const newState = currentState + 1
      return newState
    })
  }

  return (
    <div>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Increase
      </button>
    </div>
  )
}

export default UseStateGotcha
