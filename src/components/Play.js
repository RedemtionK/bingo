import React from 'react'

const Play = (props) => {
  let generateNumbers = [];

  for (let i = 1; i <= 20; i++) {
    generateNumbers.push(
      <div className='myNumberButtons'>
        <button id='numbersOfButton' className={props.chooseNumber.includes(i) ? "played" : ""}
          key={i}
          onClick={() => props.clickAddNumber(i)}
          disabled={props.deactivate ? true : props.chooseNumber.includes(i)}>
          {i}
        </button>
      </div>
    )
  }
  return (

    <div className='play'>

      {generateNumbers}
      <button className='service-button' onClick={() => props.clickOnCash()} disabled={props.otherDeactivation} >Cash</button>
      <button className='service-button' onClick={() => props.onReset()}  >Clear</button>
      <button className='service-button' onClick={() => props.clickOnRandom()} disabled={props.otherDeactivation}>Random</button>

    </div>
  )
}

export default Play

