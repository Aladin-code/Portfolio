import React from 'react';
import { TbDeviceDesktopCode } from "react-icons/tb";
import { FaFileCode } from "react-icons/fa";
function Services(){
    return(
        <>
        <section id="services" className='bg-[#FFF5E9]  pt-[100px] '>
        <h1 className='w-full tracking-wide text-center text-[#FFBD59] text-lg font-semibold'>SERVICES</h1>
        <h1 className='w-full mt-1 text-center font-semibold text-3xl '><span className='border-b-4 border-[#FFBD59]'>AREA</span> OF EXPERTISE</h1>
        
        <div className='w-full flex justify-center  mt-7 text-center text-base pb-9'>
            <div className='group hover:shadow-xl   w-1/5 border mx-3 p-4 rounded-lg ' data-aos="fade-right">
                <div className='w-full text-center'>
                    <TbDeviceDesktopCode className="bg-[#FFBD59] text-black p-2 rounded-full text-7xl mx-auto"/>
                </div>
                <p className="mt-4 font-semibold ">FRONTEND DEVELOPMENT</p>
                <p className='leading-7 mt-3 p-3'>I specialize in crafting visually appealing and highly interactive user interfaces. Using modern technologies like HTML, CSS, JavaScript, and frameworks such as React, I build responsive websites that provide seamless user experiences across all devices. My goal is to turn creative ideas into functional, user-friendly applications.</p>
            </div>
           
            <div className='w-1/5 border mx-3 p-4 hover:shadow-xl rounded-lg' data-aos="fade-up">
                <div className='w-full text-center'>
                    <FaFileCode className="bg-[#FFBD59] text-black p-2 rounded-full text-7xl mx-auto"/>
                </div>
                <p className=" mt-4 font-semibold">BACKEND DEVELOPMENT</p>
                <p className='leading-7 mt-3 p-3'>With expertise in server-side development, I handle the core functionality that powers web applications. I manage databases, API integrations, and server-side logic to ensure efficient, secure, and scalable solutions. My skills include working with Node.js, PHP, Python, and databases like MySQL and MongoDB, allowing me to build robust backends that support dynamic applications.</p>
            </div>
            <div className=' w-1/5 border mx-3 p-4 hover:shadow-xl rounded-lg ' data-aos="fade-left">
                <div className='w-full text-center'>
                    <TbDeviceDesktopCode className="bg-[#FFBD59] text-black p-2 rounded-full text-7xl mx-auto"/>
                </div>
                <p className="mt-4 font-semibold">GRAPHICS DESIGN</p>
                <p className='leading-7 mt-3 p-3'>As a creative graphics designer, I create visually engaging digital assets that enhance the aesthetic appeal of websites and applications. From logos to custom illustrations, I use tools like Adobe Photoshop, Illustrator, and Figma to design high-quality visuals that align with the brand identity and improve the user experience.</p>
            </div>
        </div>
        </section>
        </>
    );
}

export default Services;
