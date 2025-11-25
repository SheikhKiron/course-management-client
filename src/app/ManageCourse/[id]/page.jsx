'use client';
import React, { use, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter, useParams } from 'next/navigation';
import { AuthContext } from '../../Auth/AuthContext';
import Spiner from '@/Components/Spiner';

export default function Update() {
  const { user } = use(AuthContext);
  const router = useRouter();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    axios
      .get(
        `https://course-management-system-server-one.vercel.app/courses/${id}`
      )
      .then(res => {
        const course = res.data;
        if (course.email !== user?.email) {
          toast.error("You can't edit this course!");
          router.push('/ManageCourse');
          return;
        }
        reset(course);
        setLoading(false);
      })
      .catch(err => {
        toast.error('Course not found');
        router.push('/ManageCourse');
      });
  }, [id, reset, router, user?.email]);

  const onSubmit = async data => {
    try {
       const { _id, ...courseData } = data;
      await axios.put(
        `https://course-management-system-server-one.vercel.app/courses/${id}`,
        {
          ...courseData,
         email: user.email
        }
      );
      toast.success('Course updated successfully!');
      router.push('/ManageCourse');
    } catch (error) {
      toast.error('Failed to update course!');
      console.error(error);
    }
  };

  if (loading) return <Spiner></Spiner>;

  return (
    <div className="flex justify-center py-10">
      <div className="card bg-base-100 w-full max-w-xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-primary mb-6">Update Course</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="label">Title</label>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register('title', { required: 'Title is required' })}
              placeholder="Course Title"
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="label">Short Description</label>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register('shortDesc', {
                required: 'Short description is required',
              })}
              placeholder="Short Description"
            />
            {errors.shortDesc && (
              <p className="text-red-500">{errors.shortDesc.message}</p>
            )}
          </div>

          <div>
            <label className="label">Full Description</label>
            <textarea
              className="textarea textarea-bordered w-full"
              {...register('fullDesc', {
                required: 'Full description is required',
              })}
              placeholder="Full Description"
            />
            {errors.fullDesc && (
              <p className="text-red-500">{errors.fullDesc.message}</p>
            )}
          </div>

          <div>
            <label className="label">Price</label>
            <input
              type="number"
              className="input input-bordered w-full"
              {...register('price', { required: 'Price is required', min: 0 })}
              placeholder="Price"
            />
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </div>

          <div>
            <label className="label">Date</label>
            <input
              type="date"
              className="input input-bordered w-full"
              {...register('date', { required: 'Date is required' })}
            />
            {errors.date && (
              <p className="text-red-500">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label className="label">Priority</label>
            <select
              className="select select-bordered w-full"
              {...register('priority')}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div>
            <label className="label">Image URL</label>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register('imageUrl')}
              placeholder="Image URL"
            />
          </div>

          <button className="btn btn-primary w-full mt-4" type="submit">
            Update Course
          </button>
        </form>
      </div>
    </div>
  );
}
