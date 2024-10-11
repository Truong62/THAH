import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function PageNotFound() {
  return (
    <React.Fragment>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen text-center bg-white">
        <div className="flex items-center">
          <div className="mr-8">
            <h1 className="text-4xl font-bold">404 Not Found</h1>
            <h2 className="text-6xl font-bold mt-2">Hey Buddy</h2>
            <p className="text-lg mt-4">
              We can’t seem to find the page you are looking for .
            </p>
            <a
              href="/"
              className="mt-6 inline-block px-6 py-3 text-lg text-white bg-black rounded hover:bg-gray-800 font-bold"
            >
              BACK TO OUR HOME
            </a>
          </div>
          <img
            src="https://github.com/bedimcode/responsive-404-page/blob/main/assets/img/ghost-img.png?raw=true"
            alt="Ghost"
            className="w-48 h-48"
          />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
