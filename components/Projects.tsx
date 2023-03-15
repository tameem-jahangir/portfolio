import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    projects: Project[];
}

const Projects = ({projects}: Props) => {


  return (
    <motion.div
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-teal-600 text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-teal-600/20 scrollbar-thumb-teal-600'>
            {projects?.map((project,i) => (
            <div key={project._id} className='bg-teal-50/10 w-screen flex flex-shrink-0 snap-center 
                            flex-col space-y-5 items-center justify-center p-20 md:p-40 h-screen'>
                <motion.img
                    initial={{ y: -300, opacity: 0}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1.2}}
                    viewport={{ once:true }}
                    src={urlFor(project?.image).url()} alt="Project Image" />
                <div className='relative space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>Project {i +1} of {projects.length}: {project?.title}</h4>
                    <p className='text-lg text-black text-justify'>{project?.summary}</p>
                </div>
            </div> 
            ))}
        </div>
 
    
    </motion.div>
  )
}

export default Projects