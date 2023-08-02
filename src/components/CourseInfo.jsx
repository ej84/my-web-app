import React from 'react';
import supabase from '@/lib/supabase';
import { Auth } from "@supabase/auth-ui-react";

const CourseInfo = ({course, category}) => {

    const {title, description, price, updated_at} = course;

    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-lg rounded px-8 pb-28 mb-4 flex flex-col my-2 md:w-1/2">
          <div className="mt-24">
          <h2 className="bg-gray-900 px-1 mb-3 text-xl font-bold text-white">{title}</h2>
          <h3 className="px-2 mb-2 text-lg font-semibold text-gray-600">Instructor: Instructor Name</h3>
          <div className="px-2 mb-2 text-gray-600">Category: {category}</div>
          <p className="px-2 mb-2 text-gray-600">Description: {description}</p>
          <div className="px-2 mb-2 text-gray-600">Price: ${price}</div>
          <div className="px-2 mb-2 text-gray-600">Upload Date: {updated_at}</div>
          <div className="px-2 mb-4 text-gray-600">Number of Users: 100</div>
          
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Rating:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" min="0" max="5" step="0.1" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Review:</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="flex items-center justify-between">
              <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Submit" />
            </div>
          </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default CourseInfo;
  