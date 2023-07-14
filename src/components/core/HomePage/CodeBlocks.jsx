import React from 'react'
import CTAButton from './Button'
import {FaArrowRight} from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'


function CodeBlocks({
    position , heading , subheading , ctab1 , ctab2,bgGradient , codecolor,
    codeblock
}) {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10 items-center`}>
       {/* section 1 */}
         <div className='w-[90%] lg:w-[50%] flex flex-col gap-8 '>
            {heading}
             <div className='text-richblack-200 font-bold'>
                {subheading}
             </div>

             <div className='flex gap-7 mt-7'>
                   <CTAButton active={ctab1.active} linkto={ctab1.linkto}>
                      <div className='flex gap-2 items-center'>
                        {ctab1.btnText}
                        <FaArrowRight/>
                      </div>
                   </CTAButton>

                   <CTAButton active={ctab2.active} linkto={ctab2.linkto}>
                      
                        {ctab2.btnText}
                        
                   </CTAButton>
             </div>
             
         </div>
    <div className='h-fit flex flex-row text-[15px] w-[100%] py-4 lg:w-[500px]
        bg-gradient-radial  from-cyan-700 to-richblack-900 '
    >
         <div className='text-center flex flex-col w-[10%] gap-6 text-richblack-400 font-inter font-bold
          
          '>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                
               
                    
                </div>
                <div className={`w-[90%] flex flex-col gap-2 font-bold pr-2 ${codecolor} font-mono
                    `}>

                        
                   <TypeAnimation 
                   sequence={[codeblock , 5000 ,""]}
                   repeat={Infinity}
                   cursor= {true}
                   omitDeletionAnimation ={true}
                   style={
                    {
                    whiteSpace : "pre-line",
                    display : "block"
                    }
                   }
                   />

                
                   </div>
                </div>
                </div>
    // </div>
  )
}

export default CodeBlocks