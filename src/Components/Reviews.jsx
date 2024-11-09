// import React from 'react'
// import Review from './Review'

// const Reviews = () => {
//   return (
//     <div className='mt-32 mb-32'>
//         <div className='flex justify-between w-[95%] mx-auto mb-4'>
//             <h3 className='font-semibold text-lg'>User Reviews On This Product</h3>
//             <h3 className='font-semibold text-lg'>View More</h3>
//         </div>
//         <Review />
//         <Review />
//         <Review />
//         <Review />
//     </div>
//   )
// }

// export default Reviews

import React from 'react';
import Review from './Review';

const Reviews = () => {
  return (
    <div className="mt-16 md:mt-32 mb-16 md:mb-32 px-4">
      <div className="flex flex-col md:flex-row justify-between w-[95%] mx-auto mb-4">
        <h3 className="font-semibold text-lg text-center md:text-left">User Reviews On This Product</h3>
        <h3 className="font-semibold text-lg text-center md:text-right mt-2 md:mt-0 cursor-pointer">View More</h3>
      </div>
      <div className="flex flex-col gap-6">
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default Reviews;
