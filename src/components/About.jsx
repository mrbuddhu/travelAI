import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import LoadingSpinner from './LoadingSpinner'
const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
    initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1}}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
     className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About 
        <span className='underline underline-offset-4 decoration-1 under font-light'>Our Journey</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Travel, Dedicated to Creating Your Perfect Getaway</p>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <div className='relative h-100 w-full sm:w-1/2 max-w-lg rounded-lg overflow-hidden bg-gray-200'>
          {!imageLoaded && (
            <div className='absolute inset-0 flex items-center justify-center'>
              <LoadingSpinner size="lg" />
            </div>
          )}
          <img 
            src={assets.aboutp} 
            alt="About Travelia" 
            className={`h-100 w-full rounded-lg transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className='flex flex-col items-center md:items-start text-gray-600 mt-10'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>1</p>
                    <p>Year in the Travel Industry – Growing Strong</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>15+</p>
                    <p>Countries Curated for Travellers</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>500+</p>
                    <p>Happy Travelers Guided</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>50+</p>
                    <p>Active Travel Packages</p>
                </div>
            </div>
            <p className='my-10 max-w-lg'>We are a new-age travel company built with a passion for exploring the world and making travel simple for everyone. Even though we are just starting our journey, our vision is clear — to provide smooth, affordable, and memorable travel experiences. With carefully curated itineraries, reliable partners, and a fresh approach, we aim to become your trusted travel companion. To make planning even easier, we’ve introduced our AI Trip Planner — a smart tool that helps you create personalized itineraries in seconds based on your interests, budget, and travel style..</p>
            <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>
        </div>
      </div>
    </motion.div>
  )
}

export default About