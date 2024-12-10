import React from 'react';
import profilepic from "/pp.jpg";
import css from "/css.png";
import html from "/html.png";
import js from "/js.png";
import mongo from "/mongo.png";
import node from "/node.png";
import python from "/python.png";



const Portfolio = () => {
    const cardItem = [{
        id:1,
        logo: python,
        link:"https://github.com/Abhayamani/AIVirtualMouse",
        ls:"https://github.com/Abhayamani/AIVirtualMouse",
        name:"Artificial Intelligence Virtual Mouse",
        text:"Users can easily control the computer screen without virtual mouse or keyboard with their fingers only."
    },
    {
        id:2,
        logo:python,
        link:"https://github.com/Abhayamani/EmbossedNumberPlateRecognition",
        ls:"https://github.com/Abhayamani/EmbossedNumberPlateRecognition",
        name:"Automatic Number Plate Recognition System",
        text:"Users can upload the pictures of vehicle with numberplate and extract the number from there and recognize them."

    },
    {
        id:3,
        logo:html,
        name:"Portfolio Website",
        link:"https://github.com/Abhayamani/AbhayaPortfolio",
        ls:"https://abhayamani.github.io/AbhayaPortfolio/",
        text:"This is my other personal website where people can know more about me. It's created with the help of plain javascript and simple html along with bootstrap."
    },
    {
        id:4,
        logo:js,
        name:"Task Management System",
        link:"https://github.com/Abhayamani/TaskManagementApp",
        ls:"https://github.com/Abhayamani/TaskManagementApp",
        text:"System from which the task manager can assign, monitor and switch ongoing tasks among team members. Made with the help of complete MERN Stack"
    
    },
    {
        id:5,
        logo:css,
        name:"Fitness Site",
        link:"https://abhaya-gym.netlify.app/",
        ls:"https://abhaya-gym.netlify.app/",
        text:"Site for looking out for various exercises. Created with the help of react state management. Includes the use of search and filter algorithm."
    },
    {
        id:6,
        logo:mongo,
        name:"Map Project",
        link:"https://github.com/Abhayamani/MapProject",
        ls:"https://github.com/Abhayamani/MapProject",
        text:"Interactive map showing schools of Kathmandu and their description. Made with the help of Leaflet JS and react-leaflet. Bootstrap used"
    },
    {
        id:7,
        logo:node,
        name:"Ecommerce Platform",
        link:"https://github.com/Abhayamani/Ecommercewithfirebase",
        ls:"https://github.com/Abhayamani/Ecommercewithfirebase",
        text:"Ecommerce portal where users can login and add products to their cart and purchase products. Firebase serving as backend and database for the system."
    }

    ]
  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
            <span className='underline font-semibold'>Featured Projects</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                {
                    cardItem.map(({id,logo,name,text,link,ls}) => (
                        <div className='md:w-[300px] md:h-[350px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300'key ={id}>
                            <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]'alt="" />
                            <div>
                                <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                                <p className='px-2 text-gray-700'>{text}</p>
                            </div>
                            <div className='px-6 py-4 space-x-2 justify-around'>
                                <a href={link} target='_blank'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded '>Source Code</button>
                                    </a> 
                                <a href={ls} target='_blank'>
                                <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Live Site</button>

                                </a>

                            </div>
                        </div>
                    )
                )
                }
            </div>
        </div>
        
    </div>
  )
}

export default Portfolio