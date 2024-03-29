import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonFill} from 'react-icons/bs'
import Logo from '../assets/logo3.png'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
    }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0C2D57] text-gray-300'>
        <div>
            <img src={Logo} alt="logo" className='h-12'/>
        </div>
        {/*menu*/}
        <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                    </li>
                <li>
                <Link to='about' smooth={true} duration={500}>
                        About
                    </Link></li>
                <li>
                <Link to='Skills' smooth={true} duration={500}>
                        Skills
                    </Link></li>
                <li>
                <Link to='work' smooth={true} duration={500}>
                        Work
                    </Link></li>
                <li>
                <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link></li>
            </ul>
        </div>
        {/*Fabars*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/*Mobile menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex-col justify-center bg-[#0C2D57] text-center flex items-center '}>
            <li className='py-6 text-4xl'><Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                    </li>
            <li className='py-6 text-4xl'><Link to='about' smooth={true} duration={500}>
                        About
                    </Link></li>
            <li className='py-6 text-4xl'><Link to='Skills' smooth={true} duration={500}>
                        Skills
                    </Link></li>
            <li className='py-6 text-4xl'><Link to='work' smooth={true} duration={500}>
                        Work
                    </Link></li>
            <li className='py-6 text-4xl'><Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link></li>
        </ul>
        {/*social icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                    <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/HETTski">
                        Github <FaGithub  size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                    <a className="flex justify-between items-center w-full text-gray-300" href="mailto: hubert.tanski@vp.pl">
                        Email <HiOutlineMail  size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                    <a className="flex justify-between items-center w-full text-gray-300" href="https://drive.google.com/file/d/1Xx1eacC0t62H50bVZD2SA0pesS3XprEm/view?usp=sharing">
                        Resume <BsFillPersonFill  size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar