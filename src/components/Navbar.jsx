import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaWhatsapp,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.jpg';
import { Link } from 'react-scroll';
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255, 255, 255)",        
      transition: {
          yoyo: Infinity,            
      }      
  }    
}

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#5271ff] text-[#ffbd59]'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '150px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <motion.li        
        variants={buttonVariants}
        whileHover="hover"
        >
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </motion.li>
        <motion.li        
        variants={buttonVariants}
        whileHover="hover"
        >
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </motion.li>
        <motion.li        
        variants={buttonVariants}
        whileHover="hover"
        >
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </motion.li>
        <motion.li        
        variants={buttonVariants}
        whileHover="hover"
        >
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </motion.li>
        <motion.li        
        variants={buttonVariants}
        whileHover="hover"
        >
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </motion.li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              WhatsApp <FaWhatsapp size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Contact <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
