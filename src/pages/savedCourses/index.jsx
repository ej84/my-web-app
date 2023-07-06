import React, { useEffect, useState } from 'react';
import supabase from '../../lib/supabase'; // Assuming you have set up Supabase for fetching data
import { FaSearch } from 'react-icons/fa';
import SavedCourses from "../../components/SavedCourses";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const SavedCoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [categories, setCategories] = useState([]);
    const session = useSession();
  
    useEffect(() => {
      // Fetch courses data from Supabase
      const fetchCourses = async () => {
        try {
          const { data, error } = await supabase.from('courses').select(`*, categories(id, name)`);
          if (error) {
            throw error;
          }
          setCourses(data);
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };
      // Fetch categories data from Supabase
      const fetchCategories = async () => {
          const { data: categories, error: categoriesError } = await supabase
            .from('categories')
            .select('*');
          if (categoriesError) {
            console.log('Error fetching categories:', categoriesError);
          }
          else {
            setCategories(categories);
          }
          
        };
  
      fetchCourses();
      fetchCategories();
    }, [categories]);
  
    useEffect(() => {
      handleSearch();
    }, [searchTerm]);
  
    const handleSearch = async () => {
      try {
        const { data, error } = await supabase
        .from('courses')
        .select('*')
        .or(`title.ilike.%${searchTerm}%, description.ilike.%${searchTerm}%`)
        .order('created_at', { ascending: false});
  
        if (error) throw error;
  
        setCourses(data);
      } catch (error) {
        console.error('Failed to search courses: ', error);
      }
    };
  
   const handleSearchInputChange = (event) => {
      setSearchTerm(event.target.value);
   };
  
    return (
      
      <div className="container mx-auto px-4 mt-8">
          <h1 className="text-2xl font-bold mb-4">You Saved Courses</h1>
          <div className="flex justify-between items-center mb-4">
            <div className="relative flex-1 mr-4">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-md shadow-md focus:outline-none focus:shadow-outline"
                value={searchTerm}
                onChange={handleSearchInputChange}
              />
              <FaSearch
                className="absolute top-0 right-0 mt-2 mr-2 text-gray-400 cursor-pointer"
                onClick={handleSearch}
              />
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <SavedCourses
                key={courses.id}
                course={courses.course}
                userId={session?.user?.id}
                category={courses.categories && courses.categories.name ? courses.categories.name : 'Uncategorized'}
              />
          </div>
      </div>
    );
  };
  
  export default SavedCoursesPage;
  