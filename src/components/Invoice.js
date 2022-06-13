import React from 'react'
import { GrSubtractCircle } from "react-icons/gr";


const Invoice = (props) => {
  return (
    <div>
      <h2>Number Selected</h2>

      {props.playNumber.map((playNumber,id)=>(
        <div key={id}  >
          <p className='hide'> Mark:{playNumber}</p>

          <GrSubtractCircle onClick={()=>props.removePlayedNumber(playNumber)} />
        </div>
      ))}

      <span>Total:${props.amountBet}</span>

    </div>
  )
}

export default Invoice
