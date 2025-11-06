"use client"

import React from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

const SignUp: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <form className="bg-gray-800 p-10 rounded-3xl shadow-xl w-full max-w-md space-y-6">
        
        {/* Circular Logo centered */}
        <div
          className="flex flex-col items-center mb-6 cursor-pointer"
          onClick={() => router.push('/')}
          title="Go to Home"
        >
          <div className="bg-gray-700 rounded-full w-32 h-32 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all">
            <Image
              src="/images/dragon.svg"
              width={70}
              height={70}
              alt="Logo"
              className="drop-shadow-2xl"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-white">Sign Up</h2>

        <div className="space-y-4">
          <input
            required
            type="text"
            placeholder="Username"
            className="w-full p-4 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            required
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-semibold">
          Create Account
        </button>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <span
            className="text-blue-400 hover:underline cursor-pointer"
            onClick={() => router.push('/auth/login')}
          >
            Login
          </span>
        </p>

      </form>
    </div>
  );
};

export default SignUp;
