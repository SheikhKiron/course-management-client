'use client';

import { Suspense } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { auth } from '../Firebase/firebase.config';
import { toast } from 'react-toastify';
import Social from '@/Components/Social';
import { useRouter, useSearchParams } from 'next/navigation';


function LoginContent() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';

  const handleLogin = data => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        toast.success('Login Successfully');
        router.replace(redirect);
      })
      .catch(err => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-289px)] py-10">
      <title>EduMaster - Login</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl text-primary font-bold">Login now!</h1>
          <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                {...register('email')}
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                {...register('password')}
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-primary mt-4">Login</button>
            </fieldset>
            <p>
              Do you have no account ? Please{' '}
              <Link href="/Register" className="text-primary underline">
                Register
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


export default function Login() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}
