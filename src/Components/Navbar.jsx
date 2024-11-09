// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='flex w-full justify-between items-center px-7 py-4'>
//         <img className='h-20 object-cover rounded-md' src="https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg" alt="" />
//         <div className='flex gap-10'>
//             <h4 className='text-lg font-semibold capitalize'>Home</h4>
//             <h4 className='text-lg font-medium capitalize'>Free Listing</h4>
//             <h4 className='text-lg font-medium capitalize'>Service</h4>
//             <h4 className='text-lg font-medium capitalize'>Contact Us</h4>
//             <h4 className='text-lg font-medium capitalize'>Login/Register</h4>
//         </div>
//     </div>
//   )
// }

// export default Navbar


import React from 'react';

const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center px-4 py-4 md:px-7 md:py-6">
      <img
        className="h-12 md:h-16 lg:h-20 object-cover rounded-md"
        src="https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg"
        alt=""
      />
      <div className="hidden md:flex gap-4 lg:gap-10">
        <h4 className="text-sm md:text-base lg:text-lg font-semibold capitalize">Home</h4>
        <h4 className="text-sm md:text-base lg:text-lg font-medium capitalize">Free Listing</h4>
        <h4 className="text-sm md:text-base lg:text-lg font-medium capitalize">Service</h4>
        <h4 className="text-sm md:text-base lg:text-lg font-medium capitalize">Contact Us</h4>
        <h4 className="text-sm md:text-base lg:text-lg font-medium capitalize">Login/Register</h4>
      </div>
      <div className="md:hidden">
        <button className="text-xl">&#9776;</button> {/* Hamburger Menu Icon */}
      </div>
    </div>
  );
};

export default Navbar;
