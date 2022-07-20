import React from 'react'
import { useReducer } from 'react'

const initialState = {
    counter: 0,
    counter2: 10

}

const reducer = (state, action) =>{
    switch(action.type){
        case 'increment':
            return { ...state, counter: state.counter + action.value}
        case 'decrement':
            return { ...state, counter: state.counter + action.value}
        case 'increment2':
            return { ...state, counter2: state.counter2 + action.value}
        case 'decrement2':
            return { ...state, counter2: state.counter2 + action.value}
        default:
            return state
    }
}

const ComplexCounter3 = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <div>
            <div>Complex Counter three value are - {count.counter} </div>
            <button type='button' onClick={()=>dispatch({type: 'increment', value: 10})} >Increment </button>
            <button type='button' onClick={()=>dispatch({type: 'decrement', value: 10})}>Decrement </button>
        </div>
        <div>
            <div>Complex Counter three 2 value are - {count.counter2} </div>
            <button type='button' onClick={()=>dispatch({type: 'increment2', value: 10})} >Increment </button>
            <button type='button' onClick={()=>dispatch({type: 'decrement2', value: 10})}>Decrement </button>
        </div>
    </div>
  )
}

export default ComplexCounter3