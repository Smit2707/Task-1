// import React from 'react'
// import { IoMdArrowRoundBack } from "react-icons/io";
// import { IoMdArrowRoundForward } from "react-icons/io";
// import Card from './Card';
// import Cards from './Cards';

// const Marque = () => {
//     return (
//         <>
//             <div className='flex justify-between w-[95%] mt-32 mx-auto mb-4 items-center'>
//                 <h3 className='font-semibold text-lg'>More From This Seller</h3>
//                 <div className='flex gap-5'>
//                     <IoMdArrowRoundBack />
//                     <IoMdArrowRoundForward />
//                 </div>
//             </div>
//             <div className='w-full h-[40%]'>
//                 <Cards />
//             </div>
//         </>
//     )
// }

// export default Marque

import React from 'react';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import Cards from './Cards';

const Marque = () => {
    return (
        <>
            <div className="flex justify-between w-[90%] md:w-[95%] mt-10 md:mt-32 mx-auto mb-4 items-center">
                <h3 className="font-semibold text-md md:text-lg">More From This Seller</h3>
                <div className="flex gap-3 md:gap-5 text-lg md:text-xl">
                    <IoMdArrowRoundBack className="cursor-pointer" />
                    <IoMdArrowRoundForward className="cursor-pointer" />
                </div>
            </div>
            <div className="w-full h-auto md:h-[40%]">
                <Cards />
            </div>
        </>
    );
};

export default Marque;
