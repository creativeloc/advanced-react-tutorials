import { useState, useReducer } from "react"
import { data } from "../../../data"

import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions"
import reducer from "./reducer"

const defaultState = {
  people: data,
  isLoading: false
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } })
    // const newPeople = state.people.filter((person) => person.id !== id)
    let newPeople = people.filter((person) => person.id !== id)
    return { ...state, people: newPeople }
  }

  const clearList = () => {
    dispatch({ type: CLEAR_LIST })
  }

  const resetList = () => {
    dispatch({ type: RESET_LIST })
    return { ...state, people: data }
  }

  console.log(state)

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      {state.people.length > 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          Reset Items
        </button>
      )}
    </div>
  )
}

export default ReducerBasics
