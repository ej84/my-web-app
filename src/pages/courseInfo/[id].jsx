import CourseInfo from '../../components/CourseInfo.jsx';
import supabase from '@/lib/supabase.js';
import { useState, useEffect } from 'react';

export async function getServerSideProps(context) {
  const { id } = context.params;
  let { data: course, error } = await supabase
    .from('courses')
    .select('*')
    .eq('id', id)
    .single();

    if (error) console.log("Error: ", error);
  
  let {data: category, error2 } = await supabase
    .from('categories')
    .select('name')
    .eq('id', course.category_id)
    .single();
    
    if (error2) console.log("Error: ", error2);
  
  return {
    props: { course, category },
  }
}

const CourseInfoPage = ({ course, category }) => {
  return (
    <div>
      <CourseInfo
        key={course.id}
        course={course}
        category={category ? category.name : 'Uncategorized'}
      />
    </div>
  );
}

export default CourseInfoPage;
