import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaApple } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="w-full px-4 md:px-8 py-6 flex flex-col gap-6 border-t-2 border-gray-200">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-4">
                <div className="w-full md:w-1/5 flex justify-center md:justify-start">
                    <img className="h-32 md:h-48 object-cover rounded-md" 
                         src="https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg" 
                         alt="Company Logo" />
                </div>

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
