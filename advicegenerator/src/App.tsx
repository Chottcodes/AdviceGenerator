import React from 'react';
import './styles/global.css';
import AdviceComponent from './components/advicecomponent';
import ButtonComponent from './components/buttonComponent';

function App() {

  const getAdvice =async () => {
    try{
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
    }
    catch(error){
      console.error(error);
    }
  }


  return (
    <div className="bg-[#323a49]  rounded-lg h-96 w-[90%] m-auto mt-30 flex flex-col relative ">
      <AdviceComponent adviceNumber = {5} adviceQuote="hello"/>
      <ButtonComponent onClick={getAdvice} style="bg-[#52ffa8] active:shadow-xl active:shadow-[#52ffa8] bg- w-[20%] h-[20%] absolute top-95 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center " imgstyles='h-[40%]'/>
    </div>
  )
}

export default App
