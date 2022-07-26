import React from 'react'
import { useReducer } from 'react'

const initialState = 0;
const reducer  = (state, action) =>{
    switch(action){
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
  return (
        <div>
            <div>Counter - {count}</div>
            <button type='button' onClick={()=>dispatch('increment')}>Increament</button>
            <button type='button' onClick={()=>dispatch('decrement')}>Decreament</button>
        </div>
  )
}

export default Counter