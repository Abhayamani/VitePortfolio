import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { ReactTyped } from "react-typed";

import profilepic from "/pp.jpg";








const Home = () => {
  return (
    <>
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                <span className='text-xl'>Welcome In My Feed</span>
                <div className='flex space-x-1 text-2xl md:text-4xl'>
                <h1>Hello, I'm a </h1>
                <ReactTyped className='text-red-700 font-bold'
                strings={["Developer","Programmer","Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
                />                
            </div>
                <br/>
                <p className='text-sm md:text-md text-justify'>Aspiring IT Enthusiast in the field of Software Development</p>
                <br/>
                {/*social media icons */}
                <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'>
                <div className='space-y-2'>
                    <h1 className='font-bold'>Available on</h1>
                    <ul className='flex space-x-5'>
                        <li>
                            <a href='https://www.facebook.com/abhaya.mani.paudel/' target='blank'>
                            <FaSquareFacebook className='text-2xl cursor-pointer'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/abhaya-mani-paudel-63a792269/' target='blank'>
                            <FaLinkedin className='text-2xl cursor-pointer'/>
                            </a>
                        </li>
                        <li>
                             <a href='https://github.com/Abhayamani' target='blank'>
                            <FaGithubSquare className='text-2xl cursor-pointer'/></a>
                        </li>
                    </ul>
                </div>
                <div className='space-y-2'>
                <h1 className='font-bold'>Currently working on</h1>
                    <div className='flex space-x-5'>
                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-{2px}'/>
                    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-{2px}'/>    
                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-{2px}'/>
                    <FaNode className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-{2px}'/>

                        
                    </div>
                </div>

                </div>
                
            </div>
            <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
              <img src={profilepic} className="rounded-full md:w-{450px} md:h-{450px}  "alt="" />
            </div>
        </div> 
    </div>
    <hr/>
    </>
  )
}

export default Home