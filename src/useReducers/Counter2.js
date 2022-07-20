import React from 'react'
import { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) =>{
    switch(action){
        case "increment":
            return state + 10
        case "decrement":
            return state-10
        default:
            return state
    }
}

const Counter2 = () => {
    const [ count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <div> Countable value are - {count} </div>
        <button type='button'  onClick={()=>dispatch('increment')}>Increment</button>
        <button type='button' onClick={()=>dispatch('decrement')}>Decrement</button>
    </div>
  )
}

export default Counter2