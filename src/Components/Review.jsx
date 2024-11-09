import React from 'react'
import { FaRegStar } from "react-icons/fa";

const Review = () => {
    return (
        <>
        
            <div className='w-full flex items-center flex-col gap-2 mt-3'>
                <div className='flex items-center gap-2 w-[95%] xl:w-[95%] xl:justify-start'>
                    <img className='h-20 w-20 object-cover rounded-full' src="https://images.unsplash.com/photo-1652278859087-a09fd73d39a8?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div>
                        <h3 className='text-lg font-semibold'>Smit Yadav</h3>
                        <h4 className='text-sm text-zinc-500 font-extrathin'>2 Days Ago</h4>
                    </div>
                </div>
                <div className=' w-[85%] px-7 py-2'>
                    <div className='flex justify-between'>
                        <h4 className='font-semibold'>Lorem ipsum dolor sit amet.</h4>

                        <div className='flex gap-2 items-center'>
                            <h4 className='font-semibold'>4.8</h4>
                            <div className='text-yellow-400 flex'>
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                        </div>
                    </div>
                    <h5 className='text-sm tracking-tight leading-tight text-zinc-500 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque veniam suscipit commodi illo incidunt at corrupti itaque iusto quisquam debitis odit fugit facilis placeat voluptate, tempore numquam sed. Ipsa, libero quod repellat est nemo qui cumque beatae odio architecto eaque? Vel iste ullam, mollitia aliquam animi ut neque enim dolorum?</h5>
                </div>
            </div>
        </>
    )
}

export default Review