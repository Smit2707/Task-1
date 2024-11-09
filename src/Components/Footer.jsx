// import React from 'react'
// import { FaFacebook } from "react-icons/fa";
// import { RiInstagramFill } from "react-icons/ri";
// import { FaLinkedin } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaApple } from "react-icons/fa";
// import { IoLogoGooglePlaystore } from "react-icons/io5";

// const Footer = () => {
//     return (
//         <div className=' w-[100%] px-7 py-4 flex flex-col gap-2 border-2'>
//             <div className=' w-full flex'>
//                 <div className='w-[20%]'>
//                     <img className='h-56 object-cover rounded-md' src="https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg" alt="" />
//                 </div>
//                 <div className='w-[60%] flex items-center justify-evenly'>
//                     <div>
//                         <h2 className='font-semibold'>Links</h2>
//                         <h4>About Us</h4>
//                         <h4>Contact Us</h4>
//                         <h4>Customer Care</h4>
//                         <h4>Free Listing</h4>
//                         <h4>Media</h4>
//                     </div>
//                     <div>
//                         <h2 className='font-semibold'>Links</h2>
//                         <h4>About Us</h4>
//                         <h4>Contact Us</h4>
//                         <h4>Customer Care</h4>
//                         <h4>Free Listing</h4>
//                         <h4>Media</h4>
//                     </div>
//                     <div>
//                         <h2 className='font-semibold'>Links</h2>
//                         <h4>About Us</h4>
//                         <h4>Contact Us</h4>
//                         <h4>Customer Care</h4>
//                         <h4>Free Listing</h4>
//                         <h4>Media</h4>
//                     </div>
//                     <div>
//                         <h2 className='font-semibold'>Links</h2>
//                         <h4>About Us</h4>
//                         <h4>Contact Us</h4>
//                         <h4>Customer Care</h4>
//                         <h4>Free Listing</h4>
//                         <h4>Media</h4>
//                     </div>
//                 </div>
//                 <div className='w-[20%] flex  flex-col justify-evenly items-center'>
//                     <div>
//                         <h2>Contact US On</h2>
//                     </div>
//                     <div className='flex gap-4 '>
//                         <FaFacebook />
//                         <RiInstagramFill />
//                         <FaLinkedin />
//                         <FaTwitter />
//                         <FaApple />

//                     </div>
//                     <div className='flex flex-col gap-2'>
//                         <div className='flex items-center justify-between w-[100%] border-[1px] border-black rounded-md px-4 py-2 gap-3'>
//                             <div>
//                                 <IoLogoGooglePlaystore />
//                             </div>
//                             <div>
//                                 <h4 className='text-sm'>get it on</h4>
//                                 <h4 className='text-sm'>Google Playstore</h4>
//                             </div>
//                         </div>
//                         <div className='flex items-center justify-between w-[100%] border-[1px] border-black rounded-md px-4 py-2 gap-3'>
//                             <div>
//                                 <FaApple />
//                             </div>
//                             <div>
//                                 <h4 className='text-sm'>get it on</h4>
//                                 <h4 className='text-sm'>Google Playstore</h4>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='flex flex-col justify-center items-center py-2 gap-2'>
//                 <h5>Travel & Tourism | Beauty | Job | Education | Food | Home & Decor | Fitness | Health | Real Estate | Banking | Finance | Shopping | Fitness | Health | Real Estate
//                 </h5>
//                 <h5>copyright @2008-2013. All rights reserved Privacy | Help | FAQs
//                 </h5>
//             </div>
//         </div>
//     )
// }

// export default Footer



// import React from 'react';
// import { FaFacebook, FaLinkedin, FaTwitter, FaApple } from "react-icons/fa";
// import { RiInstagramFill } from "react-icons/ri";
// import { IoLogoGooglePlaystore } from "react-icons/io5";

// const Footer = () => {
//     return (
//         <div className="w-full px-4 md:px-7 py-4 flex flex-col gap-4 border-2">
//             <div className="flex flex-col md:flex-row w-full">
//                 <div className="w-full md:w-[20%] flex justify-center mb-4 md:mb-0">
//                     <img className="h-40 md:h-56 object-cover rounded-md" src="https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg" alt="" />
//                 </div>
//                 <div className="w-full md:w-[60%] flex flex-wrap justify-center md:justify-evenly items-start gap-6">
//                     {["About Us", "Contact Us", "Customer Care", "Free Listing", "Media"].map((item, index) => (
//                         <div key={index} className="text-center md:text-left">
//                             <h2 className="font-semibold mb-2">Links</h2>
//                             {[...Array(4)].map((_, i) => <h4 key={i}>{item}</h4>)}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="w-full md:w-[20%] flex flex-col items-center gap-4 mt-4 md:mt-0">
//                     <h2>Contact Us On</h2>
//                     <div className="flex gap-3">
//                         <FaFacebook className="text-lg cursor-pointer" />
//                         <RiInstagramFill className="text-lg cursor-pointer" />
//                         <FaLinkedin className="text-lg cursor-pointer" />
//                         <FaTwitter className="text-lg cursor-pointer" />
//                     </div>
//                     <div className="flex flex-col gap-3 w-full">
//                         <div className="flex items-center border rounded-md p-2 gap-2 w-full">
//                             <IoLogoGooglePlaystore className="text-2xl" />
//                             <div>
//                                 <h4 className="text-xs">Get it on</h4>
//                                 <h4 className="text-sm font-semibold">Google Play</h4>
//                             </div>
//                         </div>
//                         <div className="flex items-center border rounded-md p-2 gap-2 w-full">
//                             <FaApple className="text-2xl" />
//                             <div>
//                                 <h4 className="text-xs">Get it on</h4>
//                                 <h4 className="text-sm font-semibold">App Store</h4>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="text-center py-2">
//                 <h5 className="text-sm">Travel & Tourism | Beauty | Job | Education | Food | Home & Decor | Fitness | Health | Real Estate | Banking | Finance | Shopping</h5>
//                 <h5 className="text-xs mt-2">©2008-2013. All rights reserved | Privacy | Help | FAQs</h5>
//             </div>
//         </div>
//     );
// };

// export default Footer;


import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaApple } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="w-full px-4 md:px-8 py-6 flex flex-col gap-6 border-t-2 border-gray-200">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-4">
                {/* Logo Section */}
                <div className="w-full md:w-1/5 flex justify-center md:justify-start">
                    <img className="h-32 md:h-48 object-cover rounded-md" 
                         src="https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg" 
                         alt="Company Logo" />
                </div>

                {/* Links Section */}
                <div className="w-full md:w-3/5 flex flex-wrap justify-center md:justify-between gap-6">
                    {Array(4).fill().map((_, index) => (
                        <div key={index} className="text-center md:text-left">
                            <h2 className="font-semibold mb-2">Links</h2>
                            <ul className="space-y-1">
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Customer Care</li>
                                <li>Free Listing</li>
                                <li>Media</li>
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact & Download Section */}
                <div className="w-full md:w-1/5 flex flex-col items-center gap-4">
                    <h2 className="text-lg font-semibold">Contact Us On</h2>
                    <div className="flex gap-3 text-xl">
                        <FaFacebook className="cursor-pointer" />
                        <RiInstagramFill className="cursor-pointer" />
                        <FaLinkedin className="cursor-pointer" />
                        <FaTwitter className="cursor-pointer" />
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <div className="flex items-center border rounded-md p-2 gap-2 w-full">
                            <IoLogoGooglePlaystore className="text-2xl" />
                            <div>
                                <h4 className="text-xs">Get it on</h4>
                                <h4 className="text-sm font-semibold">Google Play</h4>
                            </div>
                        </div>
                        <div className="flex items-center border rounded-md p-2 gap-2 w-full">
                            <FaApple className="text-2xl" />
                            <div>
                                <h4 className="text-xs">Get it on</h4>
                                <h4 className="text-sm font-semibold">App Store</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="text-center py-2 border-t-2 border-gray-200">
                <p className="text-sm md:text-base">
                    Travel & Tourism | Beauty | Job | Education | Food | Home & Decor | Fitness | Health | Real Estate | Banking | Finance | Shopping
                </p>
                <p className="text-xs md:text-sm mt-2">
                    ©2008-2013. All rights reserved | Privacy | Help | FAQs
                </p>
            </div>
        </div>
    );
};

export default Footer;
