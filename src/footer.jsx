import React from'react';
import { CgMail } from "react-icons/cg";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer(){
    return(
        <div className='w-full flex justify-between items-center border bg-[#FFBD59] h-[70px] px-[150px] text-white'>
            <p>© 2024  Aladin E. Cacho. All right reserved.</p>
            <div className='flex items-center text-white text-lg'><CgMail className='text-2xl mx-1'/><FaInstagramSquare className='text-xl mx-1'/><FaFacebook className=' mx-1'/></div>
        </div>
    );
}
export default Footer;