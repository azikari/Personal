import React, { useEffect } from 'react'
import { useState } from 'react'

const Counter = () => {

    const [projectCount, setProjectCount] = useState(0);
    const [clientCount, setClientCount] = useState(0)

    useEffect(() => {

        const IntervalProjectCount=setInterval(() => {
            setProjectCount((prev)=>{
                if(prev<2536){
                       return prev+1;

                }

                clearInterval(IntervalProjectCount);
                return prev;
             
            })
            
        }, 0.001);

        return ()=>clearInterval(IntervalProjectCount)
      
    }, [])
    
     useEffect(() => {
        const clientInterval = setInterval(() => {
            setClientCount((prev)=>{
                if (prev<6784) {
                    return prev +1 ;

                }
                clientInterval(clientInterval)
                return prev;
                
            })
            
        }, 0.001);


        return ()=>clearInterval(clientInterval)
       
     }, [])
     
    return (
        <div className=" bg-blue-400">
            <div className='flex item-center justify-center text-white  container mx-auto gap-5 px-10 py-8 bg-blue-400'>

                <div className="flex flex-col gap-4 justify-center items-center  ">
                    <p className='text-[40px] text-bold'>{projectCount} +</p>
                    <p className='text-md'>Projects Completed</p>
                </div>

                <div className="flex flex-col gap-4 justify-center items-center  ">
                    <p className='text-[40px] text-bold'>{clientCount}</p>
                    <p className='text-md'>Happy Clients</p>
                </div>
            </div>
        </div>

    )
}

export default Counter