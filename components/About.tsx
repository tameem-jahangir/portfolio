import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {
  return (
    <motion.div
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-teal-600 text-2xl'>About</h3>
        <motion.div
        initial={{
            x:-200,
            opacity: 0,
        }}
        whileInView={{
            x:0,
            opacity:1,
        }}
        transition={{
            duration: 1,
        }}
        viewport={{once: true}}
        >
        <img className='relative -mb-20 md:mb-0 h-40 w-40 flex-shrink-0 rounded-full md:rounded-none md:h-96 md:w-64 xl:w-[500px] xl:h-[600px] object-cover' src={urlFor(pageInfo?.heroImage).url()} alt='image of tj_2'/>
        </motion.div>
        <div className='space-y-10 px-0 md:px-10'>
            <h1 className='text-4xl text-gray-600 text-semibold'>A <span className='underline decoration-teal-500/50'>little</span> about me:</h1>
            <h4 className='text-base h-40 w-80 text-gray-700 text-justify'>{pageInfo?.backgroundInfo}</h4>
        </div>
    </motion.div>
  )
}

export default About