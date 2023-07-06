import React from 'react';
import { Auth } from "@supabase/auth-ui-react";

function CourseInfo() {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 w-1/2">
          <h2 className="mb-4 text-xl font-bold text-gray-700">Course Title</h2>
          <h3 className="mb-2 text-lg font-semibold text-gray-600">Instructor: Instructor Name</h3>
          <p className="mb-2 text-gray-600">Course Summary...</p>
          <div className="mb-2 text-gray-600">Category: Course Category</div>
          <div className="mb-2 text-gray-600">Price: $100</div>
          <div className="mb-2 text-gray-600">Upload Date: 2023-07-06</div>
          <div className="mb-4 text-gray-600">Number of Users: 100</div>
          
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
    );
  }
  
  export default CourseInfo;
  