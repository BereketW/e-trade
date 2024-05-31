import React from 'react'
import Image from 'next/image'
import about01 from "../../public/assets/about-01.png"

const AboutStore = () => {
  return (
    <main className='w-full my-20'>
      <div className='flex flex-col md:flex-row lg:flex-row gap-20 items-center px-20'>
        <div className=''>
            <Image src={about01} alt="about01"
            className='w-[35rem] rounded-lg'
            />
        </div>
        <div className='max-w-[44rem]'>
            <p className='text-blue-500 font-semibold'>About Store</p>
            <p className='text-3xl font-semibold py-2'>Online shopping includes both buying things online.</p>
            <p className='text-gray-500 text-xl py-4'>Salesforce B2C Commerce can help you create unified,
                 intelligent digital commerce experiences — both online
                  and in the store</p>
            <div className='flex flex-col md:flex-row lg:flex-row gap-4'>
                <p className='max-w-80  text-gray-500'>Empower your sales teams with industry tailored solutions that support manufacturers as they go digital, and adapt to changing markets & customers faster by creating new business.</p>
                <p className='max-w-80 text-gray-500'>Salesforce B2B Commerce offers buyers the seamless, self-service experience of online shopping with all the B2B</p>
            </div>
        </div>
      </div>
    </main>
  )
}

export default AboutStore;