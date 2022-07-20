import React from 'react'
import { useReducer } from 'react'

const initialState = {
    counter: 0
}
const reducer =(state, action)=>{
    switch(action.type){
        case 'increment':
            return {counter: state.counter + action.value}
        case 'decrement':
            return {counter: state.counter - action.value}
        default:
            return state
    }
}

const ComplexCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <div>Complex Counter value are - {count.counter} </div>
        <button type='button' onClick={()=> dispatch({type: 'increment', value: 5})}>Increment </button>
        <button type='button' onClick={()=>dispatch({ type: 'decrement', value: 5})}>Decrement </button>
    </div>
  )
}

export default ComplexCounter