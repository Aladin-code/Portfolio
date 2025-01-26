import React, { useState, useEffect } from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import Projects from './Projects.jsx';
import Footer from './footer.jsx';
import './App.css';
import { Link } from 'react-scroll';
import logo from './files/logo-portfolio.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  // State to control the visibility of the navbar
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
    let timeoutId = null;
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      // Hide navbar on scroll down and show it on scroll up
      if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false); // Hide navbar when scrolling down
      } else {
        setIsNavbarVisible(true);  // Show navbar when scrolling up
      }

      lastScrollY = currentScrollY;

      // Set a timeout to detect when scrolling stops
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setIsNavbarVisible(true); // Show navbar when scrolling stops
      }, 300); // Adjust the delay as needed
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div>
      {/* This is the navigation bar */}
      <nav
        className={`flex justify-between px-[120px] border-b-3 shadow-md transition-transform duration-300 ${
          isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'white', zIndex: 1000 }}
      >
        <div>
          <img src={logo} alt="logo" width="90px" height="30px" />
        </div>
        <ul className="flex items-center text-xl ">
          <li className="mx-2">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer font-[650] text-[#FFBD59]"
              
            >
              HOME
            </Link>
          </li>
          <li className="mx-2">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              ABOUT
            </Link>
          </li>
          <li className="mx-2 ">
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer "
            >
              SERVICES
            </Link>
          </li>
          <li className="mx-2">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
             PROJECTS
            </Link>
          </li>
          <li className="mx-2 bg-[#FFBD59] text-white rounded-xl px-2 font-[500]">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer "
            >
              CONTACT 
            </Link>
          </li>

        </ul>
      </nav>

      <div > {/* Add space to prevent content from being hidden behind navbar */}
        <Home name={"Aladin Cacho"} />
        <About name={"Aladin E. Cacho"} email={"cachoaladin192.@gmail.com"} phone={"09122978320"}/>
        <Services />
        <Projects />
        <Contact />
        <Footer />
        
      </div>
    </div>
  );
}

export default App;
