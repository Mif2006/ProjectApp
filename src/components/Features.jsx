import React from 'react'
import {motion} from 'framer-motion'

import { useInView } from 'react-intersection-observer'

import coms from '../assets/coms.svg'
import EarPhone from '../assets/EarPhone.svg'
import Location from '../assets/Location.svg'
import CustomButton from './CustomButton'

const Features = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    })
  return (
    <section className='bg-transparent px-10 py-10 mb-[340px]' id="features" ref={ref}>
        <div className='container mx-auto'>
            <h2 className='text-3xl md:text-5xl font-bold text-white text-center mb-10'>
                Key Features
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: inView ? 1: 0, y: inView ? 0:20}}
                    transition={{duration: 0.8}}
                    className='flex flex-col items-center'
                >
                    <img src={coms} className='w-16 h-16 object-contain mb-4' />
                    <h3 className='text-xl font-bold text-white mb-2'>Feature 1</h3>
                    <p className='text-gray-300 text-center'>This is some text about the matrix, this text is just a placeholder, This is some text about the matrix, this text is just a placeholder</p>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: inView ? 1: 0, y: inView ? 0:20}}
                    transition={{duration: 0.8}}
                    className='flex flex-col items-center'
                >
                    <img src={coms} className='w-16 h-16 object-contain mb-4' />
                    <h3 className='text-xl font-bold text-white mb-2'>Feature 2</h3>
                    <p className='text-gray-300 text-center'>This is some text about the matrix, this text is just a placeholder, This is some text about the matrix, this text is just a placeholder</p>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: inView ? 1: 0, y: inView ? 0:20}}
                    transition={{duration: 0.8}}
                    className='flex flex-col items-center'
                >
                    <img src={coms} className='w-16 h-16 object-contain mb-4' />
                    <h3 className='text-xl font-bold text-white mb-2'>Feature 3</h3>
                    <p className='text-gray-300 text-center'>This is some text about the matrix, this text is just a placeholder, This is some text about the matrix, this text is just a placeholder</p>
                </motion.div>
                
            </div>
           
        </div>
            <div className='flex justify-center mt-10'>
        <CustomButton text="Next Section" link="testimonials" />
        </div>
    </section>
  )
}

export default Features