import React, { Component } from 'react';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import emailjs from 'emailjs-com';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                name: '',
                email: '',
                message: ''
            }
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }));
    };

    sendEmail = (e) => {
        e.preventDefault();

        const { formData } = this.state;

        
        emailjs.send('service_ztnebuo', 'template_9yab7iu', {
            name: formData.name,
            email: formData.email,
            message: formData.message
        }, 'zawhfgu3Cac9_SdaN')
        .then((result) => {
            console.log(result.text);
            alert('Email sent successfully!');
        }, (error) => {
            console.log(error.text);
            alert('Failed to send email.');
        });
    };

    render() {
        const { formData } = this.state;

        return (
            <>
                <div id="contact" className="w-full flex px-10 h-screen pt-[100px] bg-[#FFF5E9]" data-aos="fade-up">
                    <div className="w-1/2 flex justify-end pr-[130px]">
                        <div>
                            <p className="text-5xl font-semibold text-[#FFBD59]">CONTACT</p>
                            <p className="mt-3 mb-5 text-[#979393] text-base">Have a project in mind? <br />Get in touch with me via social media or email.</p>
                            <div className="flex items-center">
                                <FaFacebook className="text-[#FFBD59] text-3xl mr-2" />
                                <p className="text-sm">Aladin E. Cacho</p>
                            </div>
                            <div className="mt-2 flex items-center">
                                <RiInstagramFill className="text-[#FFBD59] text-3xl mr-2" />
                                <p className="text-sm">@notaladin</p>
                            </div>
                            <div className="mt-2 flex items-center">
                                <BsFillThreadsFill className="text-[#FFBD59] text-3xl mr-2" />
                                <p className="text-sm">@aladincacho</p>
                            </div>
                            <div className="mt-2 flex items-center">
                                <FaLinkedin className="text-[#FFBD59] text-3xl mr-2" />
                                <p className="text-sm">Aladin Cacho</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 text-[#838181] flex justify-start">
                        <div className="w-[550px]">
                            <form onSubmit={this.sendEmail}>
                                <p className="text-5xl font-semibold text-[#FFBD59] mb-3">SEND AN EMAIL</p>
                                <label htmlFor="name">Name</label><br />
                                <input 
                                    className="w-full border rounded-lg py-2 px-2 border-[#838181] mb-5" 
                                    type="text" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={this.handleChange}
                                    required 
                                /><br />
                                
                                <label htmlFor="email">Email</label><br />
                                <input 
                                    className="w-full border rounded-lg py-2 px-2 border-[#838181]" 
                                    type="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={this.handleChange}
                                    required 
                                /><br />
                                
                                <label htmlFor="message" className="mt-5">Message</label><br />
                                <textarea 
                                    className="mt-2 w-full border border-[#838181] rounded-lg h-[200px]" 
                                    name="message" 
                                    value={formData.message}
                                    onChange={this.handleChange}
                                    required
                                ></textarea>

                                <div className="text-right mt-2">
                                    <button type="submit" className="p-2 text-white bg-[#FFBD59] rounded-lg">
                                        SEND EMAIL
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;
