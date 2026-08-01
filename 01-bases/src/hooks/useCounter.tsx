 import { useState } from 'react'


const useCounter = () => {
const [count, setCount] = useState<number>(10);

    const increaseBy = (value: number)=>{
        setCount(count + value)
    };


  return {
    // Properties
   count,

   // Actions
    increaseBy
  };
};

export default useCounter
