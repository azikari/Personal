import React, { useEffect } from 'react'
import { useState } from 'react'

const Counter = () => {

    const [projectCount, setProjectCount] = useState(0);
    const [clientCount, setClientCount] = useState(0)
    const [coffeeCount, setCoffeeCount] = useState(0)
    const [professionalCount, setProfessionalCount] = useState(0)

    useEffect(() => {

        const IntervalProjectCount = setInterval(() => {
            setProjectCount((prev) => {
                if (prev < 2536) {
                    return prev + 1;

                }

                clearInterval(IntervalProjectCount);
                return prev;

            })

        }, 1);

        return () => clearInterval(IntervalProjectCount)

    }, [])

    useEffect(() => {
        const IntervalClientCount = setInterval(() => {
            setClientCount((prev) => {
                if (prev < 6784) {
                    return prev + 2;

                }
                clearInterval(IntervalClientCount)
                return prev;

            })

        }, 1);


        return () => clearInterval(IntervalClientCount)

    }, [])

    useEffect(() => {
        const IntervalCoffeeCount = setInterval(() => {
            setCoffeeCount((prev) => {
                if (prev < 2239) {
                    return prev + 1;

                }
                clearInterval(IntervalCoffeeCount)
                return prev;

            })

        }, 1);


        return () => clearInterval(IntervalCoffeeCount)

    }, [])

    useEffect(() => {

        const IntervalProfessionalCount = setInterval(() => {
            setProfessionalCount((prev) => {
                if (prev < 434) {
                    return prev + 1;

                }

                clearInterval(IntervalProfessionalCount);
                return prev;

            })

        }, 1);

        return () => clearInterval(IntervalProfessionalCount)

    }, [])

    return (
        <div className=" bg-gradient-to-r from-indigo-500/70 to-sky-400/70 mb-32">
            <div className='flex item-center justify-center text-white container mx-auto gap-40 px-10 py-32'>

                <div className="flex flex-col justify-center items-center  ">
                    <p className='text-[40px] font-bold'>{projectCount}</p>
                    <p className='text-md'>Projects Completed</p>
                </div>

                <div className="flex flex-col justify-center items-center  ">
                    <p className='text-[40px] font-bold'>{clientCount}</p>
                    <p className='text-md'>Happy Clients</p>
                </div>

                <div className="flex flex-col justify-center items-center  ">
                    <p className='text-[40px] font-bold'>{coffeeCount}</p>
                    <p className='text-md'>Cups of Coffee</p>
                </div>

                <div className="flex flex-col justify-center items-center  ">
                    <p className='text-[40px] font-bold'>{professionalCount}</p>
                    <p className='text-md'>Real Professionals</p>
                </div>
            </div>
        </div>

    )
}

export default Counter