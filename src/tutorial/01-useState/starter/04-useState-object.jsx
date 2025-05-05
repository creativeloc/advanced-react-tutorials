import { useState } from "react"

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    hobby: "Reading"
  })

  const displayPerson = () => {
    // setPerson({ name: "John", age: 28, hobby: "Photography" })
    setPerson({ ...person, name: "Susan" })
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        Show John
      </button>
    </>
  )
}

export default UseStateObject
