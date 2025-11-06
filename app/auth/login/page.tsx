"use client"

import React from "react";
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <form className="bg-gray-800 p-8 rounded-2xl shadow-lg w-80 space-y-5">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-md bg-gray-700 focus:outline-none"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-md bg-gray-700 focus:outline-none"
          required
        />
        <button className="w-full p-3 rounded-md bg-blue-500 hover:bg-green-600 transition font-semibold" disabled>
          Sign In
        </button>
        <p className="text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <a className="text-blue-400 hover:underline" onClick={() => router.push('/auth/signup')}>
            Sign Up
          </a>

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

export default Login;
