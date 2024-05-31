import React  from 'react';
import AboutStore from './AboutStore';
import AboutExperience from './AboutExperience';
import OurTeam from "./OurTeam"
import GetInTouch from './GetInTouch';

const AboutPage = () =>{
   // const isMobile = window.matchMedia('max-width:768px').matches;
 const reverse = {
      display:'flex',
      
   }
   return(
    <main className='w-full h-screen '>
       <div className=''>
         <div className='bg-gray-100 px-20 flex flex-col h-36 items-start justify-center '>
            <p className='text-gray-500 pb-4'>Home | <span className='text-blue-500 font-semibold'>About Us</span></p>
            <h1 className='text-5xl font-semibold'>About Our Store</h1>
         </div>

         <AboutStore />
         <AboutExperience />
         <OurTeam />
         <GetInTouch reverse={reverse}/>
         <GetInTouch reverse={!reverse}/>
       </div>
    </main>
   )
}

export default AboutPage;