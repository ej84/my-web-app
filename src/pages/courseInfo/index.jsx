import CourseInfo from '../../components/CourseInfo.jsx';
import supabase from '@/lib/supabase.js';
import { useState, useEffect } from 'react';

const CourseInfoPage = () => {
  const [course, setCourse] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    // Fetch courses data from Supabase
    const fetchCourse = async () => {
      try {
        const { data, error } = await supabase.from('courses').select(`*, categories(id, name)`);
        if (error) {
          throw error;
        }
        setCourse(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    // Fetch categories data from Supabase
    const fetchCategory = async () => {
        const { data: category, error: categoriesError } = await supabase
          .from('categories')
          .select('*');
        if (categoriesError) {
          console.log('Error fetching categories:', categoriesError);
        }
        else {
          setCategory(category);
        }
      };

    fetchCourse();
    fetchCategory();
  }, [category]);

  return (
    <div>
      <CourseInfo
        key={course.id}
        course={course}
        category={course.category && course.category.name ? course.category.name : 'Uncategorized'}
      />
    </div>
  );
}

export default CourseInfoPage;
