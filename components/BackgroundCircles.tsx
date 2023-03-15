import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
    initial={{
        opacity : 0,
    }}
    animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 0.6],
    }}
    transition={{
        duration: 2.5,
    }}
    className='relative my-10 flex justify-center items-center'>
        <div className='absolute border border-teal-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border opacity-20 border-teal-500 rounded-full h-[200px] w-[200px] mt-52'/>
        <div className='absolute border opacity-10 border-teal-500 rounded-full h-[400px] w-[400px] mt-52' />
        <div className='absolute border border-teal-600 opacity-20 rounded-full h-[400px] w-[400px] mt-52 animate-pulse'/>
        <div />
    </motion.div>
  )
}

export default BackgroundCircles