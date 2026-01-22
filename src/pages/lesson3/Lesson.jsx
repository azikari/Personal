import React, { useEffect, useState } from 'react'

const Lesson = () => {

    const [count, setCount] = useState(0);
    const [project,setProject]=useState(0);


    useEffect(() => {

        const interval = setInterval(() => {
            setCount(prev => {
                if (prev < 400) {

                    return prev + 1;
                }
                else {
                    clearInterval(interval)
                    return prev;
                }

            })

        }, 0.01);

        return () => clearInterval(interval)

    }, [])

    useEffect(() => {
     const intervalProject=setInterval(() => {
        setProject((prev)=>{
            if(prev<300){
                return prev +1;
            }
            else{
                clearInterval(intervalProject)
                return prev ;
            }
        })

       
        
     }, 0.01);
      return()=>clearInterval(intervalProject)

    }, [])
    




    return (
        <div className='mx-auto bg-blue-500 text-white text-2xl flex gap-10  px-6 py-10 justify-center items-center '>

            <div className=" flex gap-3 items-center  ">
                <p className='text-4xl'>{count} +</p> <span className='text-md'>User</span>

            </div>
            
            <div className=" flex gap-3 items-center ">
                <p className='text-4xl'>{project} </p> <span className='text-md'>Projects</span>

            </div>


        </div>
    )
}

export default Lesson