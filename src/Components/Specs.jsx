// import React from 'react'
// import { FaRegStar } from "react-icons/fa";
// const Specs = () => {
//     return (
//         <div className='w-[60%] mx-auto  h-[50vh] mt-20 flex gap-5'>
//             <div className='w-[35%] gap-6 flex flex-col items-center py-5 px-4 justify-center border-[1px] border-zinc-500 rounded-md'>
//                 <img className='w-full h-32 object-cover rounded-xl' src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                 <button className='bg-blue-500 text-white w-full font-medium rounded-md py-2'>Follow</button>
//                 <div>
//                     <div className='flex justify-between'>
//                         <h4 className='font-semibold text-zinc-500'>Tab Sport</h4>
//                         <div className='flex gap-2 items-center'>
//                             <h4 className='font-semibold text-zinc-500'>4.8</h4>
//                             <div className='text-yellow-400 flex'>
//                                 <FaRegStar />
//                                 <FaRegStar />
//                                 <FaRegStar />
//                                 <FaRegStar />
//                             </div>
//                         </div>
//                     </div>
//                     <div className='text-zinc-500'>
//                         <h4>Open Now:</h4>
//                         <h4>mon-fri :- 10:30 am - 9:30 pm</h4>
//                     </div>
//                     <button className='bg-blue-500 text-white w-full font-medium rounded-md py-1'>Follow</button>
//                 </div>
//             </div>
//             <div className='w-[75%] flex flex-col items-center justify-start border-zinc-500 border-[1px] rounded-md px-3'>
//                 <h2 className='text-2xl font-semibold mb-7'>Specs</h2>
//                 <div className='flex gap-5 border-[1px] rounded-xl w-[80%] items-center justify-center px-5 py-2'>
//                     <div className='text-zinc-500 text-xl font-regular'>
//                         <h4>Product Model</h4>
//                         <h4>Manufacture Details</h4>
//                         <h4>Weight</h4>
//                         <h4>Brand</h4>
//                         <h4>Size</h4>
//                         <h4>Type</h4>
//                         <h4>Color</h4>
//                     </div>
//                     <div className=' text-xl font-semibold'>
//                         <h4>Product Model</h4>
//                         <h4>Manufacture Details</h4>
//                         <h4>Weight</h4>
//                         <h4>Brand</h4>
//                         <h4>Size</h4>
//                         <h4>Type</h4>
//                         <h4>Color</h4>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Specs



import React from 'react';
import { FaRegStar } from "react-icons/fa";

const Specs = () => {
    return (
        <div className="w-full md:w-[80%] lg:w-[60%] mx-auto h-auto md:h-[50vh] mt-10 md:mt-20 flex flex-col md:flex-row gap-5 p-4">
            {/* Profile Section */}
            <div className="w-full md:w-[35%] gap-6 flex flex-col items-center py-5 px-4 justify-center border border-zinc-500 rounded-md">
                <img
                    className="w-full h-32 object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
                <button className="bg-blue-500 text-white w-full font-medium rounded-md py-2">Follow</button>
                <div className="text-center mt-4">
                    <div className="flex justify-between w-full">
                        <h4 className="font-semibold text-zinc-500">Tab Sport</h4>
                        <div className="flex gap-2 items-center">
                            <h4 className="font-semibold text-zinc-500">4.8</h4>
                            <div className="text-yellow-400 flex">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                        </div>
                    </div>
                    <div className="text-zinc-500 text-sm mt-2">
                        <h4>Open Now:</h4>
                        <h4>Mon-Fri: 10:30 am - 9:30 pm</h4>
                    </div>
                </div>
            </div>

            {/* Specs Section */}
            <div className="w-full md:w-[65%] flex flex-col items-center justify-start border border-zinc-500 rounded-md px-3 py-5">
                <h2 className="text-2xl font-semibold mb-5 md:mb-7">Specs</h2>
                <div className="flex xl:flex md:flex-row gap-5 border rounded-xl w-full md:w-[80%] items-start md:items-center justify-center px-5 py-3">
                    <div className="text-zinc-500 text-base md:text-xl font-regular">
                        <h4>Product Model</h4>
                        <h4>Manufacture Details</h4>
                        <h4>Weight</h4>
                        <h4>Brand</h4>
                        <h4>Size</h4>
                        <h4>Type</h4>
                        <h4>Color</h4>
                    </div>
                    <div className="text-base md:text-xl font-semibold">
                        <h4>XYZ123</h4>
                        <h4>Company XYZ</h4>
                        <h4>1.2 kg</h4>
                        <h4>Tab Sport</h4>
                        <h4>Medium</h4>
                        <h4>Running Shoes</h4>
                        <h4>Red</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specs;
