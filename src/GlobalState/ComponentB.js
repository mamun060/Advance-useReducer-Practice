import React from 'react'
import { useReducer } from 'react';
import { createContext } from 'react'
import ComponentA from './ComponentA';

export const CountContext =  createContext();

const initialState = 0;
const reducer =(state, action)=>{
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state -1;
        default:
            return state
    }
}

const ComponentB = () => {
    const [counter, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <CountContext.Provider value={{counterDispatch: dispatch, counterValue: counter}}>
            <ComponentA/>
        </CountContext.Provider>
    </div>
  )
}

export default ComponentB