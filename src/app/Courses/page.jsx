'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Spiner from '@/Components/Spiner';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Design', 'Marketing'];

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://course-management-system-server-one.vercel.app/courses?search=${search}`
      )
      .then(res => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [search]);

  if (loading) return <Spiner></Spiner>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Courses</h1>

      <div className="mb-4 flex flex-col md:flex-row md:items-center gap-4">
        <input
          type="text"
          placeholder="Search courses..."
          className="input input-bordered w-full max-w-md"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="select select-bordered max-w-xs"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {courses.length === 0 ? (
        <p>No courses found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div
              key={course._id}
              className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
                <p className="text-gray-600 text-sm mb-2">
                  Date: {course.date}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  Category: {course.category}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Priority: {course.priority}
                </p>
                <Link
                  href={`/Courses/${course._id}`}
                  className="btn btn-primary w-full"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
