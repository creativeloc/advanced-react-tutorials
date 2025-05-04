import { useState } from "react"

const UseStateBasics = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 2)
  }

  return (
    <div>
      <h4>You Clicked {count} times.</h4>
      <button type="button" className="btn" onClick={handleClick}>
        Click Me
      </button>
    </div>
  )
}

export default UseStateBasics
