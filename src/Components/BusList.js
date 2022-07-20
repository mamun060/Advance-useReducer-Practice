import React, { useContext } from 'react'
import { BusContext } from '../Context/BusListProvder'

const BusList = () => {
    const {buses} = useContext(BusContext)
  return (
    <div>
        <h4> This is bus context </h4>
        <ul>
            {buses.map( bus=>(
                <li>{bus.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default BusList