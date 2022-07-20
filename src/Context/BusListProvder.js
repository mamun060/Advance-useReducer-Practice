import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const BusContext = createContext();


const BusListProvder = (props) => {
    const [buses] = useState([
        {name: 'ena', id:1},
        {name: 'hanif', id:2},
        {name: 'scania', id:3}
    ])
  return (
    <BusContext.Provider value={{buses}}>
        {props.children}
    </BusContext.Provider>
  )
}

export default BusListProvder