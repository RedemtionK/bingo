import React from 'react'


const Invoice = (props) => {
  return (
    <div>
      <h2>Number Selected</h2>

      {props.playNumber.map((number,index)=>(
        <div key={index} >
          <p className='hide'> Mark:{number}</p>
        </div>
      ))}

      <span>Total:${props.amountBet}</span>

    </div>
  )
}

export default Invoice
