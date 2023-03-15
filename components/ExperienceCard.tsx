import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'


type Props = {
    experience: Experience;
}

const ExperienceCard = ({experience}: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-teal-50 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden text-gray-600'>
        <motion.div
        initial={{ y: -100, opacity: 0}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1.2}}
        viewport={{ once:true }}>
            <img 
            className='w-36 h-38 xl:w-[200px] xl:h-[200px] object-cover object-center'
            src={urlFor(experience?.companyImage).url()}
            alt='CNN image'/>
        </motion.div>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>DL Ensemble Model for CE-NBI Classification</h4>
            <p className='font-bold text-2xl mt-1'>Otto-von-Guericke University</p>
            <div className='flex space-x-2 my-2'>
                {experience.technologies.map(technology =>
                    <img key={technology._id} className='h-10 w-10 rounded-full' src={urlFor(technology?.image).url()} alt="" />
                    )}
            </div>
            <p className='uppercase üy-5 text-teal-900'>
                {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere?
                 'Present': new Date(experience.dateEnded).toDateString()}
            </p>

            <ul className='list-disc space-y-4 ml-5 text-lg max-h-60 w-70 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-teal-600/20 scrollbar-thumb-teal-600'>
                {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                    ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard