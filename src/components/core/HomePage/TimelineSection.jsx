import React from 'react'
import codingph from "../../../assests/images/coding_pic.jpg"
import HighLightText from './HighLightText'


function TimelineSection() {
  return (
    <div>
        <div className='flex flex-col md:flex-row lg:flex-row gap-5 items-center'>
              {/* left */}
              <div className='w-[57%] items-center md:w-[45%] lg:w-[45%] flex flex-col gap-4 mx-8 text-bold font-inter text-2xl
                 text-center
                 bg-gradient-radial from-gray-200 via-slate-200 to-white'>
                    {/* image */}
                    <div className=' items-center '>
                           
                            <div>
                              <HighLightText text={"ANDROID DEVELOPMENT"}/>
                          </div>
                    </div>
                    <div className=' items-center'>

                            <div>
                            <HighLightText text={"FULL STACK DEVELOPMENT"}/>
                          </div>
                    </div>
                    <div className=' flex items-center  flex-row gap-4'>
                           
                            <div>
                            <HighLightText text={"DATA STRUCTURES"}/>
                          </div>
                    </div>
                    <div className=' flex items-center  flex-row gap-4'>
                           
                           <div>
                           <HighLightText text={"BLOCK-CHAIN"}/>
                         </div>
                   </div>
                   <div className=' flex items-center  flex-row gap-4'>
                           
                           <div>
                           <HighLightText text={"META-VERSE"}/>
                         </div>
                   </div>
                    <div className=' flex items-center  flex-row gap-4'>

                            <div>
                            <HighLightText text={"MACHINE LEARNING"}/>
                          </div>
                    </div>
              </div>
             
              {/* right */}
              <div className='relative shadow-2xl'>
                 <img src={codingph} alt='abcd'
                 className='shadow-2xl object-cover h-fit  rounded-4'/>
                    
                    <div className='absolute bg-cyan-700 flex flex-row text-white py-10 uppercase
                      left-[50%]  translate-x-[-50%] translate-y-[-40%]  text-center justify-center border-r-2 shadow-md'>
                        <div className='flex flex-row gap-8 item-center border-r border-cyon-200 px-7'>
                           <p className='font-bold text-md'>2000+ Students</p>
                           <p className='text-md font-bold'>100+ Colleges</p>
                            
                        </div>
                       

                    </div>
              </div>
        </div>
    </div>
  )
}

export default TimelineSection