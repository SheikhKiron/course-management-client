'use client';

import { Suspense } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { auth } from '../Firebase/firebase.config';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Social from '@/Components/Social';
import { useRouter, useSearchParams } from 'next/navigation';


function RegisterContent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const searchParams = useSearchParams();

  const redirect = searchParams.get('redirect') || '/';

  const handleRegister = data => {
    console.log(data);
    const profileImg = data.photo[0];

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(result => {
        console.log(result.user);

        const formData = new FormData();
        formData.append('image', profileImg);

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_HOST_KEY}`;

        axios
          .post(image_API_URL, formData)
          .then(res => {
            const photoURL = res.data.data.url;
            updateProfile(auth.currentUser, {
              displayName: data.name,
              photoURL: photoURL,
            })
              .then(() => {
                toast.success('Registration Successfully');
                router.replace(redirect);
              })
              .catch(error => toast.error(error.code));
          })
          .catch(error => toast.error(error.code));
      })
      .catch(err => toast.error(err.code));
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-289px)] py-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl text-primary font-bold">Register now!</h1>
          <form onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Name"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}

              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                {...register('email', { required: 'Email is required' })}
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              <label className="label">Photo</label>
              <input
                type="file"
                className="file-input"
                {...register('photo', { required: 'Photo is required' })}
              />
              {errors.photo && (
                <p className="text-red-500 text-sm">{errors.photo.message}</p>
              )}

              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                    message:
                      'Password must contain at least one uppercase and one lowercase letter',
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}

              <button className="btn btn-primary mt-4">Register</button>
            </fieldset>
            <p className="mt-3">
              Do you have no account? Please{' '}
              <Link href="/Login" className="text-primary underline">
                Login
              </Link>
            </p>
          </form>
          <p className="text-center">Or</p>
          <Social />
        </div>
      </div>
    </div>
  );
}


export default function Register() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterContent />
    </Suspense>
  );
}
