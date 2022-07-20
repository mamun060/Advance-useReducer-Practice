import React from 'react'
import { useReducer } from 'react'


const initialState = {
    counter: 0,
    counter2: 5
}

const reducer = (state, action ) =>{
    switch(action.type){
        case 'increment':
            return { ...state, counter: state.counter + action.value }
        case 'decrement':
            return { ...state, counter: state.counter - action.value }
        case 'increment2':
            return { ...state, counter2: state.counter2 + action.value }
        case 'decrement2':
            return { ...state, counter2: state.counter2 - action.value }
        default:
            return state
    }
}



const ComplexCounter2 = () => {
    const [complexCounter, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <div>
            <div>Complex Counter two value are - {complexCounter.counter} </div>
            <button type='button' onClick={()=>dispatch({type: 'increment', value: 10})}>Increment </button>
            <button type='button' onClick={()=>dispatch({type: 'decrement', value: 10})}>Decrement </button>
        </div>
        <div>
            <div>Complex Counter two 2 value are - {complexCounter.counter2} </div>
            <button type='button' onClick={()=>dispatch({type: 'increment2', value: 10})}>Increment </button>
            <button type='button' onClick={()=>dispatch({type: 'decrement2', value: 10})}>Decrement </button>
        </div>
    </div>
  )
}

export default ComplexCounter2