import { useState } from 'react';
import './style/App.css';
import Header from './components/Header';
import Money from './components/Money';
import Play from './components/Play';
import Invoice from './components/Invoice';
import Modal from './components/Modal';

function App() {
  const[playNumber,setPlayNumbers]=useState([]);
  const[bet,setBet]=useState(0);
  const[active,setActive]=useState(true);
  const [otherActive,setOtherActive]=useState(false);

  const[modal,setModal]=useState({
    msg:``,
    visble:false
  });
  


const clearNumbers = ()=>{
  setBet(0);
  setActive(true);
  setPlayNumbers([]);
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

      alert("you can't bet $0")
    }else{

       setModal({
      msg:`This numbrs ${playNumber.toString()} have been played with a total amount of $${bet}`,
      visble:true
    })
    setOtherActive(true);
  }
  }

  const hideDiv = ()=>{
    setModal({
    visble:false
    });
  }


  
  return (
    <>
    <Header/>
<div className='main-container'>
 
 
  <Money addMoney={betMoney} deactivate={active}/>
  <Play clickOnCash={clickOnCash} clickOnRandom={quickPick} onReset={clearNumbers} 
 chooseNumber={playNumber} clickAddNumber={addNumber} deactivate={!active} otherDeactivation={otherActive}/>
  <Invoice playNumber={playNumber} amountBet={bet} />
  <Modal onHide={hideDiv} modalState={modal}/>
 
</div> 
</>
  );
}

export default App;
