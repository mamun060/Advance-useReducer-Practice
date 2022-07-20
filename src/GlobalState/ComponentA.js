import React from 'react'
import { useContext } from 'react'
import { CountContext } from './ComponentB';

const ComponentA = ({raju}) => {

    const countContext = useContext(CountContext)

  return (
    <div>
        <h4>The Global state management with UseContext & UseReducer: {countContext.counterValue}</h4>
        <div>
            <button type='button' onClick={()=> countContext.counterDispatch('increment')}>Increment</button>
            <button type='button' onClick={()=> countContext.counterDispatch('decrement')}>Decrement</button>
        </div>
    </div>
  )
}


export default ComponentA