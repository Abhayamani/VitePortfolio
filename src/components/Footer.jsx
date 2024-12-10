import React from 'react'
import { FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
    <hr/>
    <div>
        <footer className='py-12'>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
                <div className='flex flex-col items-center justify-center'>
                    <ul className='flex space-x-4'>
                        <li>
                       <a href='https://www.facebook.com/abhaya.mani.paudel/' target='blank'><FaFacebook className='cursor-pointer' size={24}/></a>
                        

                        </li>
                        <li>
                        <a href='https://www.instagram.com/anmolpaudel/' target='blank'><FaInstagram className='cursor-pointer' size={24}/></a>
                        </li>
                        <li>
                        <a href='https://www.facebook.com/abhaya.mani.paudel/' target='blank'><FaTwitter className='cursor-pointer' size={24}/></a>
                        </li>
                        <li>
                        <a href='https://www.linkedin.com/in/abhaya-mani-paudel-63a792269/' target='blank'><FaLinkedinIn className='cursor-pointer' size={24}/></a>
                        </li>
                        
                        
                    </ul>
                    <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                        <p className='text-sm'>
                            &copy; 2024 Abhaya Mani Paudel. All rights reserved.</p>
                            <p className='text-sm'>Supportive Partner - MERN</p>
                        

                    </div>
                </div>

            </div>
        </footer>
    </div>
    </>
  )
}

export default Footer