'use client';
import React, { use, useEffect, useState } from 'react';
import axios from 'axios';
import PrivateRoute from '../PrivateRoute';
import { AuthContext } from '../Auth/AuthContext';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Spiner from '@/Components/Spiner';

export default function ManageCourse() {
  const { user } = use(AuthContext);
  const [courses, setCourses] = useState([]);
  const router = useRouter();
  useEffect(() => {
    axios
      .get('https://course-management-system-server-one.vercel.app/courses')
      .then(res => setCourses(res.data));
  }, []);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://course-management-system-server-one.vercel.app/courses/${id}?email=${user.email}`
          )
          .then(() => {
            Swal.fire('Deleted!', 'Your course has been deleted.', 'success');
            setCourses(prev => prev.filter(c => c._id !== id));
          })
          .catch(err => {
            Swal.fire(
              'Error!',
              err.response?.data?.message || 'Something went wrong',
              'error'
            );
          });
      }
    });
  };

  if (!user) return <Spiner></Spiner>;

  return (
    <PrivateRoute>
      <div className="px-4 py-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Manage Your Courses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses
            .filter(course => course.email === user.email)
            .map(course => (
              <div
                key={course._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <img
                  src={course.imageUrl || '/placeholder.png'}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {course.shortDesc ||
                      course.fullDesc.substring(0, 60) + '...'}
                  </p>

                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>Price: ${course.price}</span>
                    <span>{course.date}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span
                        className={`px-2 py-1 rounded text-white text-xs ${
                          course.priority === 'High'
                            ? 'bg-red-500'
                            : course.priority === 'Medium'
                            ? 'bg-yellow-500'
                            : 'bg-green-500'
                        }`}
                      >
                        {course.priority}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        href={`/ManageCourse/${course._id}`}
                        className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Update
                      </Link>

                      <button
                        onClick={() => handleDelete(course._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {courses.filter(course => course.email === user.email).length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            You have not added any courses yet.
          </p>
        )}
      </div>
    </PrivateRoute>
  );
}
