import { useState } from 'react';
import './style/App.css';
import Header from './components/Header';
import Money from './components/Money';
import Play from './components/Play';
import Invoice from './components/Invoice';
import Message from './components/Message';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const[playNumber,setPlayNumbers]=useState([]);
  const[bet,setBet]=useState(0);
  const[active,setActive]=useState(true);
  const [otherActive,setOtherActive]=useState(false);

  const[message,setMessage]=useState({
    msg:``,
    visble:false
  });
  


const clearNumbers = ()=>{
  setBet(0);
  setActive(true);
  setPlayNumbers([]);
  setOtherActive(false);
}
const betMoney=(amount)=>{
  setBet(bet+amount);
}
  const quickPick=()=>{
    let quickNumbers=[...playNumber];
   
    while(quickNumbers.length<=4){
      const random=Math.floor(Math.random()*20)+1;
      
      if(!quickNumbers.includes(random)){
        
        quickNumbers.push(random)
      }

    }
    setPlayNumbers(quickNumbers);
    setActive(false);
  }
  const addNumber=(num)=>{
    if(playNumber.length<4){
      setPlayNumbers([...playNumber,num])
    }else if(playNumber.length===4){
      setPlayNumbers([...playNumber,num])
      setActive(false);
    }
  };
 
 
  const clickOnCash = ()=>{
    if(bet===0){

      alert("Betting $0 is not allowed ")
      
    }else{

      setMessage({
      msg:`This numbrs ${playNumber.toString()} have been played with a total amount of $${bet}    Click Me !`,
      visble:true
    })
    setActive(true);
    setOtherActive(true);
  }
  }

  const removePlayedNumber=(num)=>{
    const filter = playNumber.filter((number)=>number !==num)
    setPlayNumbers(filter);
    setActive(true)
  }

  const hideDiv = ()=>{
    setMessage({
    visble:false
    });
  }


  
  return (
    <>
    <Header/>

<div className='row align-items-start'>
 <div className='col'>
  <Money addMoney={betMoney} deactivate={active}/>
  </div>
  <div className='col'>
  <Play clickOnCash={clickOnCash} clickOnRandom={quickPick} onReset={clearNumbers} 
 chooseNumber={playNumber} clickAddNumber={addNumber} deactivate={!active} otherDeactivation={otherActive}/>
  </div>
  
 <div className='col'>
 <Invoice playNumber={playNumber} amountBet={bet} removePlayedNumber={removePlayedNumber} />
  <Message onHide={hideDiv} messageState={message}/>
 </div>

 
</div> 
</>
  );
}

export default App;
