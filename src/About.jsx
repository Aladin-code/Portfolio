import React from 'react';
import { CiUser } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { AiOutlineMail  } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import pic3 from './files/pic3.png';
function About(props){
    return(
    <>
       <section id="about" className='bg-white' data-aos="fade-up">
            <div className='w-full h-screen flex p-9 '>
                <div className="w-1/2  p-3 flex justify-end items-center">
                    <img src={pic3} alt="" />
                </div>
                <div className="w-1/2  p-3 flex flex-col justify-center items-start">
                <div className=''>
                        <h1 className='font-semibold text-3xl'><span className='p-1 border-b-4 border-[#FFBD59]'>ABOUT</span> ME</h1>
                        <p className='text-sm mt-7 tracking-wide w-[500px] text-justify leading-7'>I am a 4th-year BSIT student with expertise in frontend and backend development. I am passionate about creating seamless user experiences and building robust applications. I am eager to collaborate on innovative projects that make a meaningful impact.</p>
                        <p className='mt-4 text-sm leading-7'>
                            <CiUser className="inline-block text-[#FFBD59] text-xl"/>&nbsp;&nbsp;  Name &nbsp;&nbsp;&nbsp;: &nbsp; &nbsp; {props.name}<br></br>
                            <CiPhone className="inline-block text-[#FFBD59] text-xl"/>&nbsp;&nbsp; Phone&nbsp; &nbsp; : &nbsp;&nbsp; {props.phone}<br></br>
                            <AiOutlineMail  className="inline-block text-[#FFBD59] text-xl" />&nbsp;&nbsp; Email &nbsp; &nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;  {props.email}
                        </p>
                        <h1 className='text-xl font-semibold mt-4 tracking-wide '>SKILLS</h1>
                        <div className="w-full flex text-sm mt-2 justify-evenly ">
                            <div className="flex items-center mr-3">
                                <div><FaRegHandshake className="text-4xl text-[#FFBD59] mr-2 "/> </div>
                                <div className=''>Communication </div>
                            </div>
                            <div className="flex items-center mx-3">
                                <div><FaCode className="text-4xl text-[#FFBD59] mx-2 "/> </div>
                                <div className=''>Technical Skills </div>
                            </div>
                            <div className="flex items-center mx-3">
                                <div><FaRegLightbulb className="text-3xl text-[#FFBD59] mx-2 "/> </div>
                                <div className=''>Problem Solving </div>
                            </div>
                       
                        </div>
                        

                </div>
                   
                </div>
            </div>
        </section>
    </>
    )
}
export default About;