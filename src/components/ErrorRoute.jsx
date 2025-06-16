import React from "react";
import NavBar from "./NavBar";

const ErrorRoute = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center h-[60vh] px-4 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-red-800">404</h1>
          <p className="text-xl md:text-2xl text-gray-700">Page Not Found</p>
          <a
            href="/"
            className="inline-block mt-4 px-6 py-2 bg-red-800 text-white rounded-lg text-lg hover:bg-black transition-all duration-300"
          >
            Go Home
          </a>
        </div>
      </div>
    </>
  );
};

export default ErrorRoute;
