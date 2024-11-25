import React from 'react';
export default function ProductNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-2xl mt-4">Product Not Found</p>
      <a href="/" className="mt-6 text-lg text-blue-500 hover:underline">
        Go back to the Home Page
      </a>
    </div>
  );
}
