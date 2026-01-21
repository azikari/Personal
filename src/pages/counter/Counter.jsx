import React, { useState } from 'react'
import { GrPowerReset } from "react-icons/gr"
import { FaPlus } from "react-icons/fa6"
import { FiMinus } from "react-icons/fi"
import Swal from 'sweetalert2'


const Counter = () => {
  const [count, setCount] = useState(0)

  const handleReset = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "",
          icon: "success"
        });
      }
    });
  }

  return (
    <div className="relative bg-black h-screen w-full">
      <button
        onClick={handleReset} className="absolute top-6 left-1/2 -translate-x-1/2 text-white text-4xl"><GrPowerReset />
      </button>

      <div className="h-full flex items-center justify-center">
        <div className="w-full flex items-center justify-between px-10">

          {count > 0 ? (
            <button
              onClick={() => setCount(count - 1)}
              className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-white text-3xl">
              <FiMinus />
            </button>
          ) : (
            <div className="w-16 h-16" />
          )}

          <div className="text-white text-[240px] font-bold leading-none">{count}</div>

          <button
            onClick={() => setCount(count + 1)}
            className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-white text-3xl"><FaPlus />
          </button>

        </div>
      </div>

    </div>
  )
}

export default Counter
