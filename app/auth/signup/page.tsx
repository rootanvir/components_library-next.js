"use client"

import React from "react";
import { useRouter } from 'next/navigation';

const SignUp: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <form className="bg-gray-800 p-8 rounded-2xl shadow-lg w-80 space-y-5">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <input
          required
          type="text"
          placeholder="Username"
          className="w-full p-3 rounded-md bg-gray-700 focus:outline-none"
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-md bg-gray-700 focus:outline-none"
        />
        <input
          required
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-md bg-gray-700 focus:outline-none"
        />
        <button className="w-full p-3 rounded-md bg-blue-500 hover:bg-green-600 transition font-semibold">
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

        
        <p className="text-center text-sm text-gray-400 mt-4">
          Go to{" "}
          <span
            className="text-blue-400 hover:underline cursor-pointer"
            onClick={() => router.push('/')}
          >
            Home
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
