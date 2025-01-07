import React from 'react';
import picture from './files/picture1.png';
import picholder from './files/pic-holder.png';
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-scroll';


function Home(props){
    return(
    <>
       <section id="home" className='w-full h-screen flex bg-[#F7F7F7] relative 'data-aos="fade-right" >
        <div className='w-54 px-12 pt-[350px] text-xl text-[#FFBD59]'>
            <p className=''>
            <FaFacebookF className="my-5"/>
            <AiFillInstagram className="my-5"/>
            <FaTwitter className="my-5"/>
            </p>
          
        </div>
      
          
           
        
        <div className='flex-grow pl-[70px] pt-[350px] '>
            <p className='font-bold text-4xl tracking-wide '>Hi, I am</p>
            <p className='font-bold text-7xl mt-3 mb-3 tracking-wide '>{props.name}</p>
            <p className='opacity-50 text-black '>Building Seamless Solutions from Frontend to Backend,<br></br> One Line of Code at a Time.</p>
            <div className='text-white font-semibold mt-6'>
            <Link to="contact" smooth={true} duration={500}>
              <button className='cursor-pointer w-40 mx-1 p-2 bg-[#FFBD59] rounded-xl drop-shadow-xl hover:shadow-xl'>
                HIRE ME
              </button>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
            <button className='w-40 mx-1 p-2 bg-white rounded-xl text-[#FFBD59] border-2 border-[#FFBD59] drop-shadow-xl hover:shadow-xl'>SEE PROJECTS</button>
            </Link>
                
            </div>
        </div>
        
       </section>
       <img src={picture} alt="picture" className='w-[700px] h-54 absolute bottom-[-40px] right-0 'data-aos="fade-left"/>
    </>
    )
}
export default Home;