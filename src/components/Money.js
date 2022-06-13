import React from 'react'
import '../style/App.css';
import image from '../img/image.png'

const Money = (props) => {
  return (
    <div className='button-container'>
      <img src={image} alt=""/>
      <button className='cash-button' onClick={()=>props.addMoney(1)} disabled={props.deactivate}>1$</button>
      <button className='cash-button' onClick={()=>props.addMoney(5)} disabled={props.deactivate}>5$</button>
      <button className='cash-button' onClick={()=>props.addMoney(10)} disabled={props.deactivate}>10$</button>
      <button className='cash-button' onClick={()=>props.addMoney(20)} disabled={props.deactivate}>20$</button>
    </div>
  )
}

export default Money
