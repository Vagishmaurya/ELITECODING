import React from "react";
import HighLightText from "./HighLightText";
 


 
export default function MDBFooter() {
  return (
   <>
      <div className="w-[100%] flex flex-row text-md bg-gray-200 mt-16 text-center gap-4 items-center justify-center">
              <div className="text-center items-center">
                Created By Vagish Maurya &copy; 2023
              </div>
              <div className="text-center items-center">
                <HighLightText text={"EliteCoding.."}/>
              </div>
      </div>


   </>
  );
}