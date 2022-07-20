import React, { createContext } from 'react'
import { useState } from 'react';

export const CycleContext = createContext();

const Cyclist = (props) => {

    const [cycles] = useState([
        {name: 'hairci', id:1 },
        {name: 'herp', id:2},
        {name: 'nion', id:3}
    ])

  return (
    <div>
        <CycleContext.Provider value={{cycles}} >
            {props.children}
        </CycleContext.Provider>
    </div>
  )
}

export default Cyclist