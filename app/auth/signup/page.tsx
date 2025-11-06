"use client"

import React from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import StarCanvas from "@/components/sub/StarCanvas";
import FlyingShip from "@/components/sub/FlyingShip";
import '@/styles/globals.css';

const SignUp: React.FC = () => {
  const router = useRouter();

  return (
    <div className="relative w-full min-h-screen bg-gray-900 text-white px-4 overflow-hidden">


      <div className="absolute inset-0 z-0">
        <StarCanvas />
        <FlyingShip />
      </div>


      <form className="relative z-10 bg-gray-900 p-10 rounded-3xl shadow-xl w-full max-w-md mx-auto space-y-6 mt-20">

        <div
          className="flex flex-col items-center mb-6 cursor-pointer"
          onClick={() => router.push('/')}
          title="Go to Home"
        >
          <div
            className="flex flex-col items-center mb-6 cursor-pointer group"
            onClick={() => router.push('/')}
            title="Go to Home"
          >
            <div className="bg-gray-700 rounded-full w-32 h-32 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-[0_0_25px_#f97316] group-hover:scale-105">
              <Image
                src="/images/dragon.svg"
                width={70}
                height={70}
                alt="Logo"
              />
            </div>
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
