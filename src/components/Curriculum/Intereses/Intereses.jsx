import React from 'react'
import './Intereses.scss'
import { intereses } from '../data'

const Intereses = () => {
  return (
    <div className="intereses-container">
      <div className="central">
        <h2>Intereses</h2>

        {
          intereses.map(el => (
          <span className="item programacion" key={el}>{el}</span>
          ))
        }
        
      </div>
      
    </div>
  )
}

export default Intereses
