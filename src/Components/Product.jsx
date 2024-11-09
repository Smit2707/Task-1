// import React from 'react'
// import { BsArrow90DegRight } from "react-icons/bs";
// import { FaRegHeart } from "react-icons/fa";

// const Product = () => {
//     return (
//         <div className='w-[100%] h-[100%] flex flex-row gap-2 mt-10 '>
//             <div className='w-[30%] gap-2 flex flex-col px-5 py-2'>
//                 <div className='border-[1px] rounded-md'>
//                     <img className='h-60 w-full object-cover object-center' src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                 </div>
//                 <div className='w-full flex gap-5 overflow-auto'>
//                     <img className='h-[120px] w-[120px] object-cover' src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                     <img className='h-[120px] w-[120px] object-cover' src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                     <img className='h-[120px] w-[120px] object-cover' src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                     <img className='h-[120px] w-[120px] object-cover' src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                 </div>
//             </div>
//             <div className='w-[70%] px-4 py-2 gap-4 flex flex-col'>
//                 <div className='w-full flex justify-between items-center'>
//                     <h2 className='text-xl font-semibold capitalize'>Shoes Demo Pic(black)</h2>
//                     <div className='border-[1px] rounded-full border-black text-black text-xl p-2'>
//                         <BsArrow90DegRight />
//                     </div>
//                 </div>
//                 <div className='flex items-center justify-between w-[15%]'>
//                     <FaRegHeart />
//                     <h4 className='text-sm font-semibold'>Add to my Wishlist</h4>
//                 </div>
//                 <div className='w-[50%] flex justify-between gap-4'>
//                     <div className='flex gap-4'>
//                         <div>
//                             <h4 className='text-zinc-500 font-semibold'>Occation</h4>
//                             <h4 className='text-zinc-500 font-semibold'>Size</h4>
//                         </div>
//                         <div>
//                             <h4 className=' font-semibold'>Sports</h4>
//                             <h4 className=' font-semibold'>12</h4>
//                         </div>
//                     </div>
//                     <div className='flex gap-4'>
//                         <div>
//                             <h4 className='text-zinc-500 capitalize font-semibold'>color</h4>
//                             <h4 className='text-zinc-500 capitalize font-semibold'>type</h4>
//                         </div>
//                         <div>
//                             <h4 className='capitalize font-semibold'>red</h4>
//                             <h4 className='capitalize font-semibold'>Running shoes, Women Shoes</h4>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex justify-between items-center w-[95%]'>
//                     <div>
//                         <h4 className='font-semibold text-lg'>$ 90.76</h4>
//                         <h4 className='font-medium line-through text-sm	'>$ 110.76</h4>
//                     </div>
//                     <div>
//                         <button className='px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700'>Inquiry now</button>
//                     </div>
//                 </div>
//                 <div className='w-[95%] flex flex-col gap-2'>
//                     <h4 className='text-lg font-semibold'>Descreption</h4>
//                     <p className='text-lg font-medium tracking-tighter leading-tight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio voluptatum optio quod magnam beatae nam omnis quaerat saepe velit. Quasi iste repellendus dolore hic quam, aperiam ex, aspernatur necessitatibus odio unde placeat delectus corporis voluptatem inventore. Eaque voluptates alias eligendi iure! Molestias, eius eos?</p>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Product


import React from 'react';
import { BsArrow90DegRight } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const Product = () => {
    return (
        <div className="w-full h-full flex flex-col md:flex-row gap-4 md:gap-2 mt-10 p-4">
            {/* Product Image Section */}
            <div className="w-full md:w-[30%] flex flex-col gap-2 px-3 py-2">
                <div className="border rounded-md">
                    <img
                        className="h-60 w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                </div>
                <div className="w-full flex gap-3 overflow-x-auto">
                    {/* Thumbnail Images */}
                    <img
                        className="h-24 w-24 object-cover"
                        src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                    <img
                        className="h-24 w-24 object-cover"
                        src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                    <img
                        className="h-24 w-24 object-cover"
                        src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                    <img
                        className="h-24 w-24 object-cover"
                        src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                    {/* Repeat or map out additional images */}
                </div>
            </div>

            {/* Product Details Section */}
            <div className="w-full md:w-[70%] px-3 py-2 gap-4 flex flex-col">
                <div className="w-full flex justify-between items-center">
                    <h2 className="text-lg md:text-xl font-semibold capitalize">Shoes Demo Pic (black)</h2>
                    <div className="border rounded-full border-black text-black text-xl p-2">
                        <BsArrow90DegRight />
                    </div>
                </div>
                
                {/* Wishlist and Price */}
                <div className="flex items-center gap-2">
                    <FaRegHeart className="text-red-500" />
                    <h4 className="text-sm font-semibold">Add to my Wishlist</h4>
                </div>
                
                {/* Product Attributes */}
                <div className="w-full flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex gap-2 md:gap-4">
                        <div>
                            <h4 className="text-gray-500 font-semibold">Occasion</h4>
                            <h4 className="text-gray-500 font-semibold">Size</h4>
                        </div>
                        <div>
                            <h4 className="font-semibold">Sports</h4>
                            <h4 className="font-semibold">12</h4>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4">
                        <div>
                            <h4 className="text-gray-500 capitalize font-semibold">Color</h4>
                            <h4 className="text-gray-500 capitalize font-semibold">Type</h4>
                        </div>
                        <div>
                            <h4 className="capitalize font-semibold">Red</h4>
                            <h4 className="capitalize font-semibold">Running shoes, Women Shoes</h4>
                        </div>
                    </div>
                </div>
                
                {/* Price and Inquiry Button */}
                <div className="flex flex-col md:flex-row justify-between items-start xl:items-center w-full">
                    <div className="flex flex-col items-start md:items-center">
                        <h4 className="font-semibold text-lg">$ 90.76</h4>
                        <h4 className="font-medium line-through text-sm">$ 110.76</h4>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-4 md:mt-0">
                        Inquiry Now
                    </button>
                </div>
                
                {/* Product Description */}
                <div className="w-full flex flex-col gap-2 mt-4">
                    <h4 className="text-lg font-semibold">Description</h4>
                    <p className="text-base font-medium tracking-tight leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio voluptatum optio quod magnam beatae nam omnis quaerat saepe velit.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Product;
