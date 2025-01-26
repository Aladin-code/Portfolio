import React from 'react';
import { Link } from 'react-scroll';
import servIcon from './files/portfolio.png';
import examalter from './files/3.png';
import pv1 from './files/5.png';
import p6 from './files/6.png';
import p7 from './files/7.png';
import p8 from './files/8.png';
import shoes from './files/shoes.gif';
import philtrip from './files/philtrip.gif';
import office from './files/office.gif';
import examGif from './files/exam.gif';
import portfolioGif from './files/portfolio.gif';
import manganTayoGif from './files/mangan-tayo.gif';
import java1Gif from './files/java1.gif';
import java2Gif from './files/java2.gif';
import ganapGif from './files/ganap.gif';
import { FaCircle, FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaPhp, FaJava } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Projects() {
    return (
        <>
            <div id="projects" className="bg-white w-full min-h-screen py-[80px] px-[150px]">
                <div className="flex">
                    {/* Sidebar navigation */}
                    <div className="flex w-1/2 h-screen sticky top-0">
                        <div className="flex flex-col justify-center items-center w-full">
                            <div className='bg-white h-[600px]'>
                                <p className='text-[#FFBD59] font-semibold tracking-wide text-[60px] w-full'>
                                    PROJECTS
                                </p>
                                <p>The sites on your right are the best bits which is built from scratch.</p>
                                <img src={servIcon} width="450px" alt="" className='mt-3' />
                                <p className='text-xl tracking-widest mb-2'>All the projects on your right are built from scratch in the following stack:</p>
                                <div className="flex justify-start items-center text-[#FFBD59]">
                                    <FaCircle className="mr-2 text-[11px]" /> Html  <FaCircle className="m-2 text-[11px]" />  Css  <FaCircle className="m-2 text-[11px]" />  Javascript  <FaCircle className="m-2 text-[11px]" />  Wordpress  <FaCircle className="m-2 text-[11px]" />  PHP   <FaCircle className="m-2 text-[11px]" />  Java.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content section */}
                    <div className="w-1/2 ml-10 pt-[86px] mb-12">

                        
                        <div className="mb-10 pb-5" data-aos="fade-up">
                            <div className='border rounded-2xl shadow-xl relative'>
                                <a href="https://github.com/Aladin-code" target="_blank" rel="noopener noreferrer" title="Link to GitHub repo">
                                    <FaGithub color="gray" size={35} className='absolute right-5 top-5 cursor-pointer' />
                                </a>
                                <img src={shoes} alt="" width="600px" className='mx-auto' />
                            </div>
                            <h1 id="examalter" className='mt-5 text-left text-2xl font-semibold text-[#FFBD59]'>SHOES CENTER</h1>
                            <p className='text-left text-base text-[#979393]'>An eCommerce website for a shoe store that allows customers to browse and select shoes. Payments are made through an alternative method where users upload a GCash receipt for manual verification, ensuring a secure and flexible transaction process without a full payment gateway integration.</p>
                            <div className="flex justify-start items-center mt-2">
                                <FaHtml5 className="mr-2 text-[#E34F26]" size={20} />
                                <FaCss3Alt className="mr-2 text-[#1572B6]" size={20} />
                                <FaJs className="mr-2 text-[#F7DF1E]" size={20} />
                                <FaPhp className="mr-2 text-[#777BB4]" size={20} />
                            </div>
                        </div>

                        <div className="mb-10 pb-5" data-aos="fade-up">
                            <div className='border rounded-2xl shadow-xl relative'>
                                <a href="https://github.com/Aladin-code/Philtrip.git" target="_blank" rel="noopener noreferrer" title="Link to GitHub repo">
                                    <FaGithub color="gray" size={35} className='absolute right-5 top-5 cursor-pointer' />
                                </a>
                                <img src={philtrip} alt="" width="600px" className='mx-auto' />
                            </div>
                            <h1 id="examalter" className='mt-5 text-left text-2xl font-semibold text-[#FFBD59]'>PHILTRIP</h1>
                            <p className='text-left text-base text-[#979393]'>A travel booking web application where users can explore destinations and book trips. Although no payment gateway is implemented, the system facilitates booking requests and manages user inquiries about travel packages.</p>
                            <div className="flex justify-start items-center mt-2">
                                <FaHtml5 className="mr-2 text-[#E34F26]" size={20} />
                                <FaCss3Alt className="mr-2 text-[#1572B6]" size={20} />
                                <FaJs className="mr-2 text-[#F7DF1E]" size={20} />
                            </div>
                        </div>

                        <div className="mb-10 pb-5" data-aos="fade-up">
                            <div className='border rounded-2xl shadow-xl relative'>
                                <a href="" target="_blank" rel="noopener noreferrer" title="Link to GitHub repo">
                                    <FaGithub color="gray" size={35} className='absolute right-5 top-5 cursor-pointer' />
                                </a>
                                <img src={examGif} alt="" width="600px" className='mx-auto' />
                            </div>
                            <h1 id="examalter" className='mt-5 text-left text-4xl font-semibold text-[#FFBD59] mb-2'>EXAMALTER</h1>
                            <p className='text-left text-base text-[#979393]'>A web application designed for teachers to shuffle questionnaires, ensuring unique question orders for each student. Developed to help minimize cheating by offering dynamic quiz generation.</p>
                            <div className="flex justify-start items-center mt-2">
                                <FaHtml5 className="mr-2 text-[#E34F26]" size={20} />
                                <FaCss3Alt className="mr-2 text-[#1572B6]" size={20} />
                                <FaJs className="mr-2 text-[#F7DF1E]" size={20} />
                            </div>
                        </div>

                           <div className="mb-10 pb-7" data-aos="fade-up">
                            <div className='border rounded-2xl shadow-xl relative'>
                                <a href="" target="_blank" rel="noopener noreferrer" title="Link to GitHub repo">
                                    <FaGithub color="gray" size={35} className='absolute right-5 top-5 cursor-pointer' />
                                </a>
                                <img src={office} alt="" width="600px" className='mx-auto' />
                            </div>
                            <h1 id="examalter" className='mt-5 text-left text-2xl font-semibold text-[#FFBD59]'>OFFICE SUPPLY MONITORING SYSTEM</h1>
                            <p className='text-left text-base text-[#979393]'>A desktop-based inventory management system built with Java, focused on monitoring office supplies. Tracks inventory levels, usage, and supply restocking, making it easier for office administrators to manage resources efficiently.</p>
                            <div className="flex justify-start items-center mt-2">
                                <FaJava className="mr-2 text-[#007396]" size={20} />
                            </div>
                        </div>
                        <div className="mb-10 pb-5" data-aos="fade-up">
                            <div className='border rounded-2xl shadow-xl relative'>
                                <a href="" target="_blank" rel="noopener noreferrer" title="Link to GitHub repo">
                                    <FaGithub color="gray" size={35} className='absolute right-5 top-5 cursor-pointer' />
                                </a>
                                <img src={portfolioGif} alt="" width="600px" className='mx-auto' />
                            </div>
                            <h1 id="examalter" className='mt-5 text-left text-2xl font-semibold text-[#FFBD59]'>PORTFOLIO</h1>
                            <p className='text-left text-base text-[#979393]'>A personal portfolio website created using WordPress, showcasing my projects, skills, and professional background. Designed to be visually appealing and user-friendly, reflecting my work as a web developer.</p>
                            <div className="flex justify-start items-center mt-2">
                                <FaHtml5 className="mr-2 text-[#E34F26]" size={20} />
                                <FaCss3Alt className="mr-2 text-[#1572B6]" size={20} />
                                <FaJs className="mr-2 text-[#F7DF1E]" size={20} />
                                <FaWordpress className="mr-2 text-[#21759B]" size={20} />
                            </div>
                        </div>

                        <div className="mb-10 pb-5" data-aos="fade-up">
                            <div className='border rounded-2xl shadow-xl relative'>
                                <a href="" target="_blank" rel="noopener noreferrer" title="Link to GitHub repo">
                                    <FaGithub color="gray" size={35} className='absolute right-5 top-5 cursor-pointer' />
                                </a>
                                <img src={java1Gif} alt="" width="600px" className='mx-auto' />
                            </div>
                            <h1 id="examalter" className='mt-5 text-left text-2xl font-semibold text-[#FFBD59]'>INSTRUCTOR MANAGEMENT SYSTEM</h1>
                            <p className='text-left text-base text-[#979393]'>A Java-based desktop application for managing instructor information and schedules. Provides an intuitive interface for tracking instructor availability, assignments, and performance monitoring.</p>
                            <div className="flex justify-start items-center mt-2">
                                <FaJava className="mr-2 text-[#007396]" size={20} />
                            </div>
                        </div>

                     

                        <div className="mb-10 pb-5" data-aos="fade-up">
                            <div className='border rounded-2xl shadow-xl relative'>
                                <a href="" target="_blank" rel="noopener noreferrer" title="Link to GitHub repo">
                                    <FaGithub color="gray" size={35} className='absolute right-5 top-5 cursor-pointer' />
                                </a>
                                <img src={java2Gif} alt="" width="600px" className='mx-auto' />
                            </div>
                            <h1 id="examalter" className='mt-5 text-left text-2xl font-semibold text-[#FFBD59]'>BUDGET MONITORING SYSTEM</h1>
                            <p className='text-left text-base text-[#979393]'>A desktop application built with Java that helps users track and manage their budgets. It features data input, real-time monitoring of expenses, and visual representation of financial performance.</p>
                            <div className="flex justify-start items-center mt-2">
                                <FaJava className="mr-2 text-[#007396]" size={20} />
                            </div>
                        </div>

                        //Blogs
                        <div className="mb-10 pb-5" data-aos="fade-up">
                            <div className='border rounded-2xl shadow-xl relative'>
                                <a href="" target="_blank" rel="noopener noreferrer" title="Link to GitHub repo">
                                    <FaGithub color="gray" size={35} className='absolute right-5 top-5 cursor-pointer' />
                                </a>
                                <img src={manganTayoGif} alt="" width="600px" className='mx-auto' />
                            </div>
                            <h1 id="examalter" className='mt-5 text-left text-2xl font-semibold text-[#FFBD59]'>BUDGET MONITORING SYSTEM</h1>
                            <p className='text-left text-base text-[#979393]'>A desktop application built with Java that helps users track and manage their budgets. It features data input, real-time monitoring of expenses, and visual representation of financial performance.</p>
                            <div className="flex justify-start items-center mt-2">
                                <FaJava className="mr-2 text-[#007396]" size={20} />
                            </div>
                        </div>

                        <div className="mb-10 pb-5" data-aos="fade-up">
                            <div className='border rounded-2xl shadow-xl relative'>
                                <a href="" target="_blank" rel="noopener noreferrer" title="Link to GitHub repo">
                                    <FaGithub color="gray" size={35} className='absolute right-5 top-5 cursor-pointer' />
                                </a>
                                <img src={ganapGif} alt="" width="600px" className='mx-auto' />
                            </div>
                            <h1 id="examalter" className='mt-5 text-left text-2xl font-semibold text-[#FFBD59]'>BUDGET MONITORING SYSTEM</h1>
                            <p className='text-left text-base text-[#979393]'>A desktop application built with Java that helps users track and manage their budgets. It features data input, real-time monitoring of expenses, and visual representation of financial performance.</p>
                            <div className="flex justify-start items-center mt-2">
                                <FaJava className="mr-2 text-[#007396]" size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
