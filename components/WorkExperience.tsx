import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
  experiences: Experience[]
}

const WorkExperience = ({experiences}: Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-teal-600 text-2xl'>Experience</h3>
        
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-teal-600/20 scrollbar-thumb-teal-600'>
            {experiences?.map(experience => (
              <ExperienceCard key={experience._id} experience={experience}/>
            ))}
        </div>
    
    </motion.div>
  )
}

export default WorkExperience