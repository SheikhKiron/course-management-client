'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Spiner from '@/Components/Spiner';

export default function Card() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://course-management-system-server-one.vercel.app/courses')
      .then(res => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

 

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {courses.slice(0, 3).map(course => (
          <div
            key={course._id}
            className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform transition duration-300 hover:scale-105 hover:bg-gray-100"
          >
            {course.imageUrl && (
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{course.title}</h2>
              <p className="text-gray-700 mb-2">{course.shortDesc}</p>
              <p className="text-gray-900 font-semibold mb-2">
                Price: ${course.price}
              </p>
              <Link
                href={`/Courses/${course._id}`}
                className="btn btn-primary w-full mt-2"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      
      <div className="text-center">
        <Link href="/Courses" className="btn btn-outline btn-primary">
          View All Courses
        </Link>
      </div>
    </div>
  );
}
