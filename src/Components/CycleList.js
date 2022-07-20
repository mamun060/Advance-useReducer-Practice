import React, { useContext } from 'react'
import {CycleContext} from '../Context/Cyclist'

const CycleList = () => {
    const {cycles} = useContext(CycleContext);
  return (
      <>
        <h4>Cyle list below</h4>
        <div>
            <ul>
                {cycles.map( cycle=>(
                    <li key={cycle.id}>{cycle.name}</li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default CycleList