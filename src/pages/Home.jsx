import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from "react-icons/fa"
import HighLightText from '../components/core/HomePage/HighLightText'
import CTAButton from '../components/core/HomePage/Button'
import homevideos from "../assests/images/homevideo.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import "../App.css";
import TimelineSection
 from '../components/core/HomePage/TimelineSection'
 import Learning from '../components/core/HomePage/Learning'
import MDBFooter from "../components/core/HomePage/MDBFooter"
import Navbar from './Navbar'


function Home(props) {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  return (
    <>
    <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
       { /* {SECTION 1} */}
          <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white
                 justify-between'>
              <Link to={"/top"}>
                <div className='group mt-10 p-1 mx-auto rounded-full bg-richblack-800 
                 text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
                    
                    <div className='flex flex-row items-center text-center  px-10 py-[4px] rounded-full font-bold
                    transition-all duration-200 group-hover:bg-richblack-900 gap-2
                    bg-gradient-radial  from-cyan-900 to-richblack-900'>
                        {/* <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur"></div> */}
                        <p className='mt-[1px]'>TOP COURSES</p>
                        <FaArrowRight/>
                    
                    </div>
                </div>
              </Link>

              <div className='w-[95%] text-center text-4xl font-semibold mt-6 '>
                Empower Your Future With  
                <HighLightText text={" Coding Skills"} />
            </div>

            <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-200'>
                With our online coeding courses , you can learn at your own pace , from anywhere in the world
                and get access to a wealth of resources , including hands-on project , quizzes and personalized feedback from instructors.
            </div>

            <div className='flex flex-row gap-7 mt-8'>
                <CTAButton active = {true} linkto = {"/login"}> 
                  Learn More  
                </CTAButton>
            
                <CTAButton  active = {false} linkto = {"/login"}>
                    Book A Demo
                </CTAButton>
            </div>

            <div className=' shadow-blue-200 w-9/12 mx-5 my-10'>
                <video
                muted
                loop
                autoPlay
                >
                    <source src={homevideos} type='video/mp4'/>

                </video>
            </div>

          

          {/* code section 1  */}
           <div>
              <CodeBlocks 
                  position={"flex-col lg:flex-row"}
                  heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your 
                        <HighLightText text={" coding potential "} />
                        with our online courses
                        </div>
                  }
                  subheading={
                    "Our courses are designed and taught by industry experts who have years of eperience in this field"
                  }
                  ctab1={
                    {
                     btnText : "Try it yourself",
                     linkto : "/login",
                     active : true,
                    } 
                  }
                  ctab2={
                    {
                     btnText : "Learn More",
                     linkto : "/login",
                     active : false,
                    } 
                  }
                codeblock={
                 `<!DOCTYPE html>\n
                 <html lang="en">\n
                   <head>\n
                     <meta charset="UTF-8">\n` 
                }
                  codecolor={"text-yellow-50"}
              
              />
           </div>
         

                   {/* code section 2  */}
                   <div>
              <CodeBlocks 
                  position={"flex-col-reverse lg:flex-row-reverse"}
                  heading={
                    <div className='text-4xl font-semibold'>
                        Start Your 
                        <HighLightText text={" Coding Journey "} />
                          In Seconds
                        </div>
                  }
                  subheading={
                    "Go ahead give it a try our hands-on learning environment means you will be writing real code from your first day"
                  }
                  ctab1={
                    {
                     btnText : "Continue Learning",
                     linkto : "/login",
                     active : true,
                    } 
                  }
                  ctab2={
                    {
                     btnText : "Learn More",
                     linkto : "/login",
                     active : false,
                    } 
                  }
                codeblock={
                 `#include<bits/stdc++.h>\n
                  using namespace std;\n
                   int main(){\n
                    return  0;\n
                 } \n` 
                }
                  codecolor={"text-yellow-50"}
              
              />
           </div>
           
</div>
            
          

          {/* SECTION 2 */}
            <div className='bg-white text-richblack-700'>
                 <div className='homepage_bg h-[150px]'>
                   

                   <div className='w-11/12 max-w-maxContent flex items-center gap-5 mx-auto justify-center '>
                         <div className='flex flex-row gap-7 text-white mt-28'>
                                <CTAButton active={true} linkto={"/top"}>
                                      Explore Full Catalog
                                    </CTAButton> 

                                 <CTAButton active={false} linkto={"/login"}>
                                         Join EliteCoding
                                    </CTAButton>  
                         </div>
                   </div>

                 </div>
               
               <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center
               gap-7
               '>
                     <div className='flex flex-col lg:flex-row gap-5 mb-10 mt-[80px] items-center '>
                           <div className=' text-4xl font-semibold w-[80%] lg:w-[45%]'>
                                Get the Skills you need for a 
                                <HighLightText text={" Job that is in demand "}/>
                           </div>
                           <div className='flex flex-col gap-10 w-[80%] lg:w-[40%] items-start'>
                                <div>
                                    The modern EliteCoding is the dictates its own terms.
                                    today , to be a competetive specialist requires more than professional skills.
                                </div>
                                <div >
                                     <CTAButton active={true} linkto={"/login"}>
                                        Learn More
                                     </CTAButton>
                                </div>
                           </div>
                     </div>
                     <TimelineSection />
               <Learning />
               </div>

              
            </div>

         

          {/* SECTION 3  */}


          {/* FOOTER */}
        
        
         

    </div>
    <div className='bg-white items-center text-center'>
        <MDBFooter/>
     </div>
   
</>
  )
}

export default Home