import React from 'react';

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#d5eff3] p-4">
      <title>404 error - Page not found</title>

      <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-10 shadow-xl flex flex-col items-center max-w-xl w-full">

        {/* Error Text */}
        <h1 className="text-5xl font-extrabold text-slate-700">SORRY</h1>
        <p className="text-xl text-orange-600 font-semibold mt-2">
          PAGE NOT FOUND
        </p>

        {/* 404 Sign */}
        <div className="relative mt-8">
          <div className="w-40 h-24 bg-[#bceef3] rounded-xl flex items-center justify-center shadow">
            <p className="text-lg font-bold text-gray-700">ERROR 404</p>
          </div>

          {/* Stick illustration */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-6 w-1 bg-orange-500 rotate-45"></div>
        </div>

        {/* Back Button */}
        <a
          href="/"
          className="mt-10 px-6 py-3 bg-orange-500 text-white rounded-xl text-lg font-semibold shadow hover:bg-orange-600 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default Error;
