import React, { useEffect, useState } from "react";
import { filterData, apiUrl } from "./data";
import Topnav from "../components/core/TopCourse/Topnav";
import Filter from "../components/core/TopCourse/Filter";
import Cards from "../components/core/TopCourse/Cards";
import Spinner from "../components/core/TopCourse/Spinner";
import { toast } from "react-toastify"
import Navbar from "./Navbar";
import MDBFooter from "../components/core/HomePage/MDBFooter";


const Topcourses = (props) => {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      // console.log(output.data);
      setCourses(output.data);
    }
    catch (err) {
      // console.log(err);
      toast.error("Something Went Wrong");
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col ">
    <Navbar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Topnav />
      <div
        className="bg-bgDark2 min-h-screen">
        <Filter filterData={filterData} category={category} setCategory={setCategory} />

        <div className="w-11/12 max-w-[1200px]  mx-auto flex flex-wrap items-center justify-center">
          {
            loading ? <Spinner /> : <Cards courses={courses} category={category} />
          }
        </div>
      </div>
      <MDBFooter/>
    </div>
  )
};

export default Topcourses;