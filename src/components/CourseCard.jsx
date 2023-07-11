import React from 'react';
import ClassNames from 'classnames'; // Assuming you have set up Supabase for fetching data
import Link from "next/link";
import supabase from '../lib/supabase';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import EnrollButton from './EnrollButton';

const CourseCard = ({ course, userId, category }) => {
    const { id, title, description, price, thumbnail } = course;
    const session = useSession();

    // Generate background color and text color classes based on course title
    const bgColorClass = `bg-gray-900`;
    const textColorClass = `text-gray-500`;

    const enrollInCourse = async (courseId) => {
      const { user } = session;

      if(!user) {
        alert('You must be signed in to enroll in courses.')
        return;
      }

      try {
        const { data, error } = await supabase
          .from('user_saved_courses')
          .insert({ user_id: user.id, course_id: courseId })
          .single();

        if (error) {
          throw error;
        }

        console.log("Successfully enrolled in course: ", data);
        alert("You have sucessfully enrolled in this course!");
      } catch (error) {
        console.error("Error enrolling in course: ", error.message);
        alert("There was an error enrolling in this course. Please try again.");
      }
    }

    return (
        <div
          className={ClassNames(
            "bg-white p-4 rounded-md shadow-md",
            bgColorClass,
            textColorClass
          )}
        >
          <div
            className={ClassNames(
                "h-24 flex items-center justify-center rounded-md mb-4",
                bgColorClass,
                textColorClass
            )}
          >
            <span className="text-4xl font-bold" id="title">
                {title ? title[0].toUpperCase() : "?"}
            </span>
          </div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="h-14">
          <p className="text-gray-600 text-sm mt-2">{description}</p>
          </div>
          <span className="bg-indigo-100 text-indigo-800 font-semibold py-1 px-2 rounded-full inline-block mt-2 mr-2">{category}</span>
          <Link href="/courseInfo" className="text-white">
            <p className={ClassNames("w-28 font-semibold text-center py-1 mt-3 rounded-full hover:text-gray-400", bgColorClass)}>Learn More</p>
          </Link>
          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-800 font-semibold text-xl">${price}</span>
            <EnrollButton courseId={id} userId={userId}/>
          </div>
        </div>
    );
};

export default CourseCard;