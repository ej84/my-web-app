import { useEffect, useState } from "react";
import Link from "next/link";
import supabase from "../lib/supabase"; // assuming you have the supabase.js client in a 'lib' folder
import Slides from './Slides';


const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch the courses data from Supabase
    const fetchCourses = async () => {
      const { data, error } = await supabase.from("courses").select("*");
      if (error) {
        console.error("Error fetching courses:", error);
      } else {
        setCourses(data);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-5">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div className="bg-white p-4 rounded-md shadow-md bg-gray-900 text-gray-500">
        <div className="h-24 flex items-center justify-center rounded-md mb-4 bg-gray-900 text-gray-500">
          <span className="text-2xl text-center font-bold" id="title">
            New courses
          </span>
        </div>
        <p className="text-lg font-semibold text-gray-800">Check out the new courses that may fit your need today!</p>
        <div className="flex justify-between items-center mt-4">
        <Link href="/courses"><span className="text-violet-600 font-semibold text-xl">Explore Now</span></Link>
        </div>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md bg-gray-900 text-gray-500">
        <div className="h-24 flex items-center justify-center rounded-md mb-4 bg-gray-900 text-gray-500">
          <span className="text-2xl text-center font-bold" id="title">
            Continue from the last course
          </span>
        </div>
        <p className="text-lg font-semibold text-gray-800">You have a course that is not finished yet. Keep learning with your course again!</p>
        <div className="flex justify-between items-center mt-4">
          <Link href="/savedCourses"><span className="text-violet-600 font-semibold text-xl">Go to the last course</span></Link>
        </div>
      </div>
      </div>
      <Slides />
    </div>
  );
};

export default CourseList;