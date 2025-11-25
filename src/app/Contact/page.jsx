'use client';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    toast.success('Message sent successfully!');
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-5 flex justify-center">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-10">
       
        <div>
          <h1 className="text-5xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-6 text-lg">
            We would love to hear from you! Feel free to reach out for any
            questions, feedback, or support.
          </p>

          <div className="space-y-4">
            <div className="p-5 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-primary">📞 Phone</h2>
              <p className="text-gray-600 mt-1">+880 1234 567890</p>
            </div>

            <div className="p-5 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-primary">📧 Email</h2>
              <p className="text-gray-600 mt-1">support@example.com</p>
            </div>

            <div className="p-5 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-primary">📍 Address</h2>
              <p className="text-gray-600 mt-1">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

       
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-primary mb-6">
            Send Message
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="label">Your Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register('name', { required: true })}
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="label">Your Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                {...register('email', { required: true })}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="label">Message</label>
              <textarea
                className="textarea textarea-bordered w-full"
                {...register('message', { required: true })}
                placeholder="Write your message..."
                rows="4"
              />
            </div>

            <button className="btn btn-primary w-full text-lg mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
