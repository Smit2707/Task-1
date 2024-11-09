import React from 'react'
import { FaRegHeart } from "react-icons/fa";

const Card = () => {
    return (
        <div className='w-[55%] h-[40vh] xl:w-[15%] xl:h-[40vh] px-4 py-2 flex flex-col gap-2 border-2 bprder-zinc-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h4 className='text-zinc-500 font-semibold'>RAC</h4>
                <FaRegHeart />
            </div>
            <img className='h-[50%] w-full object-cover rounded-md' src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div>
                <h2 className='font-semibold text-lg '>Shoes Details </h2>
                <h2 className='font-semibold text-sm text-blue-700 '>Shoes Details </h2>
                <h2 className='font-thin text-lg '>$ 100 </h2>
            </div>
        </div>
    )
}

export default Card