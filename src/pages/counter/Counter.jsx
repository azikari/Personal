import React, { useState } from 'react'
import { RiResetLeftFill } from "react-icons/ri";

const Counter = () => {
    const [count,setCount]=useState(0);
  return (
    <div className='mx-auto container px-7 py-5 bg-green-200 flex gap-4 flex-col justify-center items-center h-screen'>

        <button className='px-7 py-5 rounded-xl bg-green-500'>{count}</button>
     <div className="flex gap-4 ">
           <button className='px-3 py-2 rounded-xl bg-green-500' onClick={()=>setCount(count+1)}>Increment</button>
        <button className='px-3 py-2 rounded-xl bg-green-500' onClick={()=>setCount(count-1)}>Decrement</button>

       
     </div>
      <button onClick={()=>setCount(0)}><RiResetLeftFill />
  </button>
    </div>
  )
}

export default Counter