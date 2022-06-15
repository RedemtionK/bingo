import React from 'react'
import { GrSubtractCircle } from "react-icons/gr";


const Invoice = (props) => {
  return (
    <div className='hide' >
    <div className='invoice'>
      <h2>Number Selected</h2>
      {props.playNumber.map((playNumber,id)=>(
        <div key={id}  >
          <h4 className='hide'> Mark:{playNumber}</h4>
          <GrSubtractCircle onClick={()=>props.removePlayedNumber(playNumber)} />
        </div>
      ))}

      <span>Total:${props.amountBet}</span>

    </div>
    </div>
  )
}

export default Invoice
