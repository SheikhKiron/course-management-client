'use client';
import bgImg from './bg.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
   
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-10">

        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-primary">
            Learn Anything, Anytime
          </h1>
          <p className="text-lg lg:text-xl mb-8 text-gray-700">
            Explore 100+ premium courses and boost your skills from beginner to
            expert.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="btn btn-primary px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform">
              Get Started
            </button>
            <button className="btn btn-outline px-8 py-3 rounded-lg hover:scale-105 transition-transform">
              Explore Courses
            </button>
          </div>
        </div>

   
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            <Image
              src={bgImg}
              alt="Learning Illustration"
              className="rounded-xl shadow-2xl"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

    
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] opacity-20 -z-10"></div>
    </section>
  );
}
