import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../typings';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

type Props = {
    pageInfo: PageInfo;
}

const ContactMe = ({pageInfo}: Props) => {

    const { register, handleSubmit } = useForm<Inputs>();
    
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:${pageInfo.email}?subject=${formData.email}&body=Hi, my name is ${formData.name}. ${formData.message}`;
};

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:felx-row max-w-2xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-teal-600 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                Hope to hear from you.
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-teal-600 h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>{pageInfo?.phoneNumber}</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-teal-600 h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>{pageInfo?.email}</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-teal-600 h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>{pageInfo?.address}</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input  {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input  {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input  {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea  {...register('message')} placeholder='Message' className='contactInput' />
                    <button type='submit' className='bg-teal-400 py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactMe