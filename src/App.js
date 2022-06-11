import { useState } from 'react';
import './style/App.css';
import Header from './components/Header';
import Money from './components/Money';
import Play from './components/Play';
import Invoice from './components/Invoice';

function App() {
  const[playNumber,setPlayNumbers]=useState([]);
  const[bet,setBet]=useState(0);
  const[active,setActive]=useState(true);

  const quickPick=()=>{
    let quickNumbers=[...playNumber];
    do{
      const random=Math.floor(Math.random()*20)+1;
      if(!quickNumbers.includes(random)){
        quickNumbers.push(random)
      }

    }while(quickNumbers<5)
    setPlayNumbers(quickNumbers);
    setActive(false);
  }
  
  return (
<>
 <Header/>
 <Money/>
 <Play/>
 <Invoice/>
</> 

  );
}

export default App;
