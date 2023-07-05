import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import supabase from '@/lib/supabase';
import CourseFilter from './CourseFilter';


const Header = () => {
  const session = useSession();
  //const supabase = useSupabaseClient();
  const [categories, setCategories] = useState([]);

  const handleSignOut = async () => {
    try {
      await signOut();
      // Perform any additional cleanup or navigation after sign out
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  useEffect(() => {
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

  fetchCategories();
  }, []);

  return (
    <header className="bg-gray-900 text-white py-2 px-8 flex items-start justify-start">
      <nav className="flex items-center space-x-2 space-y-2">
      <Link href="/">
        <p className="text-xl font-bold mt-1">Course App</p>
      </Link>
        <ul className="flex space-x-5">
          <li>
            <Link href="/courses">
              <p className="hover:text-gray-400">Courses</p>
            </Link>
          </li>
          <li style={{marginTop: -2}}>
            <CourseFilter className="hover:text-gray-400" title={'Category'} options={categories.map((category) => category.name)} />
          </li>
          {session ? (
            <>
              <li>
                <Link href="/account">
                  <p className="hover:text-gray-400">Account</p>
                </Link>
              </li>
              <li>
                <button onClick={() => supabase.auth.signOut()} className="text-white hover:text-gray-400">
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <li>
                <button onClick={() => supabase.auth.signInWithPassword()}>
                  <p className="text-white hover:text-gray-400">Sign In</p>
                </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
