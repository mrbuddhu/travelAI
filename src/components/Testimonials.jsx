import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Harsh Tiwari",
      role: "Early User",
      image: assets.profile_img_1,
      text: "Travelia made planning my dream trip so easy! The AI Trip Planner suggested the perfect itinerary for my Kashmir adventure. Everything was well-organized and the experience was unforgettable. Highly recommend!",
      rating: 5
    },
    {
      name: "Prabhas",
      role: "Early User",
      image: assets.profile_img_2,
      text: "As an early user, I was amazed by how smooth the booking process was. The team at Travelia helped me plan an amazing trip to Switzerland. The attention to detail and customer service is outstanding!",
      rating: 5
    },
    {
      name: "Abhishek",
      role: "Early User",
      image: assets.profile_img_3,
      text: "Best travel experience I've had! Travelia's AI Trip Planner understood exactly what I was looking for and created a personalized itinerary for my Goa trip. The whole journey was seamless from start to finish.",
      rating: 5
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='container mx-auto py-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden' id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        What Our <span className='underline underline-offset-4 decoration-1 under font-light'>Early Users</span> Say
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        Real experiences from travelers who trusted us with their journeys
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'
          >
            <div className='flex items-center gap-1 mb-4'>
              {[...Array(testimonial.rating)].map((_, i) => (
                <img key={i} src={assets.star_icon} alt="star" className='w-5 h-5' />
              ))}
            </div>
            <p className='text-gray-600 mb-6 italic'>"{testimonial.text}"</p>
            <div className='flex items-center gap-4'>
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className='w-12 h-12 rounded-full object-cover'
              />
              <div>
                <p className='font-semibold text-gray-800'>{testimonial.name}</p>
                <p className='text-sm text-gray-500'>{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials

