import React from 'react'

const Play = (props) => {
  let generateNumbers=[];

  for(let i=1;i<=20;i++){
    generateNumbers.push(
        <button className={props.chooseNumber.includes(i)? "played":""} 
        key={i} 
        onClick={()=>props.clickAddNumber(i)}
        disabled={props.deactivate ? true :props.chooseNumber.includes(i)}>
            {i}
        </button>
    )
}
  return (

    <div>
     
      {generateNumbers}
      <button onClick={()=>props.clickOnCash() } disabled={props.otherDeactivation} >Cash</button>
      <button onClick={()=>props.onReset()} disabled={props.otherDeactivation} >Clear</button>
      <button onClick={()=> props.clickOnRandom()} disabled={props.otherDeactivation}>Random</button>
      
    </div>
  )
}

export default Play

