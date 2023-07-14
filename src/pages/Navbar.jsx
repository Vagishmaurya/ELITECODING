import React from 'react'
import { Link } from "react-router-dom";
import HighLightText from '../components/core/HomePage/HighLightText';
import toast from 'react-hot-toast';

function Navbar(props) {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;


  return (
<div>
     <div className="w-11/12 max-w-[1160px] mx-auto flex flex-row justify-between items-center py-5">
        {/* Logo */}
        <div className='text-4xl text-center font-mono' >
        <Link to="/">
         <HighLightText text={"EliteCoding.."}/>
        </Link>
        </div>


          <div className="flex items-center gap-x-4 text-richblack-100 shadow-2xl">
          {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Log in</button>
          </Link>
        )}
         {isLoggedIn && (
          <Link to="/">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={() => {
              setIsLoggedIn(false)
              toast.success("Logged out");
            }}>Log out</button>
          </Link>
         )}
          </div>
      </div>      
</div>
  )
}

export default Navbar