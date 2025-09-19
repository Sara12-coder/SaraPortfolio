import React from 'react'
import Image from 'next/image';
import {assets,workData} from '@/assets/assets' 
import { motion } from "motion/react"
const Work = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
    <motion.h4
    initial={{y: -20 , opacity: 0}}
    whileInView={{y: 0,opacity:1}}
    transition={{duration:0.3,delay: 0.5}}className ='text-center mb-2 text-lg font-Ovo'>
    MY PORTFOLIO</motion.h4>
    <motion.h2 
    initial={{y: -20 , opacity: 0}}
    whileInView={{y: 0,opacity:1}}
    transition={{duration:0.5,delay: 0.5}}
    className='text-center text-5xl font-Ovo'>
    My Projects</motion.h2>
    <motion.p 
    initial={{y: -20 , opacity: 0}}
    whileInView={{y: 0,opacity:1}}
    transition={{duration:0.7,delay: 0.5}}
    className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
       Welcome to my web development portfolio! Explore the projects I've built, including a Water Quality Checker using data science,
        a Counter Elevator system with IoT integration, and an NLP-based Voice Assistant,each showcasing practical tech-driven solutions.
    </motion.p>
      
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration:0.9,delay: 0.6}} 
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
    {workData.map((project, index) => (
    <motion.div
    whileInView={{scale:1.05}}
    transition={{duration:0.3}} key={index}
    className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
      style={{ backgroundImage: `url(${project.bgImage})` }} >
      <div className="bg-white w-11/12 sm:w-10/12 rounded-md absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 py-2 sm:py-3 px-3 sm:px-5 flex items-center justify-between transition-all duration-500 group-hover:bottom-6">
        <div className="max-w-[80%]">
          <h2 className="font-semibold text-sm sm:text-base md:text-lg">{project.title}</h2>
          <p className="text-xs sm:text-sm text-gray-700">{project.description}</p>
        </div>

        <div className="border rounded-full border-black w-6 sm:w-8 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
          <Image src={assets.send_icon} alt="send icon" className="w-3 sm:w-4 md:w-5" />
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>

  </motion.div>
  )
}
export default Work;
