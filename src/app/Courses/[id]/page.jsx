'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import PrivateRoute from '@/app/PrivateRoute';
import Spiner from '@/Components/Spiner';

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    axios
      .get(
        `https://course-management-system-server-one.vercel.app/courses/${id}`
      )
      .then(res => setCourse(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spiner></Spiner>;
  if (!course) return <p className="p-6">Course not found</p>;

  return (
    <PrivateRoute>
      <div className="p-6 max-w-3xl mx-auto">
        <Link href="/Courses" className="btn btn-outline mb-4">
          ← Back to Courses
        </Link>

        <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
          {course.imageUrl && (
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-64 object-cover"
            />
          )}
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <p className="text-gray-700 mb-2">{course.shortDesc}</p>
            <p className="text-gray-700 mb-4">{course.fullDesc}</p>
            <p>
              <strong>Price:</strong> ${course.price}
            </p>
            <p>
              <strong>Date:</strong> {course.date}
            </p>
            <p>
              <strong>Category:</strong> {course.category}
            </p>
            <p>
              <strong>Priority:</strong> {course.priority}
            </p>
            <button className="btn btn-primary w-full mt-4">Enroll Now</button>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
}
