import React from 'react'
import HighLightText from './HighLightText'
import progress from "../../../assests/images/progress.jpg"
import calendar from "../../../assests/images/calendar.png"
import contacts from "../../../assests/images/contacts.jpg"
function Learning() {
  return (
    <div className='mt-10'>
        <div className='flex flex-col gap-5 mt-[90px]'>
               <div className='font-semibold text-center text-4xl'>
                  Would You Like to
                  <HighLightText text={" learn any language"} />
               </div>
               <div className='text-richblack-700 font-inter text-center mx-auto w-[65%]'> 
                 By Joining our community which has 2000+ students. You will learn
                 multiple languages easily and also get many free Courses.

               </div>
               <div className='flex flex-col md:flex-row lg:flex-row items-center justify-center mt-10'> 
                       <img src={progress} alt='abc'
                       className='object-contain -rotate-12' />
                       <img src={calendar} alt='abc'
                       className='object-contain -rotate-45' />
                       <img src={contacts} alt='abc'
                       className='object-contain rotate-12' />
               </div>
        </div>
    </div>
  )
}

export default Learning