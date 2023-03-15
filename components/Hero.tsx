import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image';
import deved from '../public/deved.png';
import Link from 'next/link';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo,
}

const Hero = ({pageInfo}: Props) => {
    const [text, count] = useTypewriter({
        words: [`Hi, my name is ${pageInfo?.name}.`,"Data Science Enthusiast!","Eat, sleep, code, repeat."],
        loop : true,
        delaySpeed : 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-0 items-center justify-center text-center overfow-hidden'>
        <BackgroundCircles/>
        <img className='relative rounded-full h-32 w-32 object-cover' src={urlFor(pageInfo?.profilePic).url()} alt="Image of TJ"/>
        <div className='z-20'>
            <h2 className='text-sm text-teal-400 uppercase pb-2 pt-5 pl-16 tracking-[5px]'>{pageInfo?.role}</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#159F70'/>
            </h1>

            <div className=' pt-5 '>
                <Link href='#about'>
                <button className='heroButton'>About</button>
                </Link>
                <Link href='#experience'>
                <button className='heroButton'>Experience</button>
                </Link>
                <Link href='#skills'>
                <button className='heroButton'>Skills</button>
                </Link>
                <Link href='#projects'>
                <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero