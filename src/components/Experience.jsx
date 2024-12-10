import React from 'react';
import html from "/html.png";
import js from "/js.png";
import css from "/css.png";
import python from "/python.png";
import node from "/node.png";
import mongo from "/mongo.png";


const Experience = () => {
    const cardItem = [{
        id:1,
        logo: mongo,
        name:"MongoDB"
    },
    {
        id:2,
        logo:html,
        name:"HTML"
    },
    {
        id:3,
        logo:js,
        name:"Javascript"
    },
    {
        id:4,
        logo:css,
        name:"CSS"
    },
    {
        id:5,
        logo:python,
        name:"Python"
    },
    {
        id:6,
        logo:node,
        name:"NodeJS"
    }

    ]
  return (
    <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Experience</h1>
            <p className='font-semibold'>I have more than 2 years of experience in following technologies.</p>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                {
                    cardItem.map(({id,logo,name}) => (
                        <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300'key ={id}>
                            <img src={logo} className='w-[150px] rounded-full'alt="" />
                            <div>
                                <div >{name}</div>
                               
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

export default Experience