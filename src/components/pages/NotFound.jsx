import React from "react";
import Navbar from "../ui/Navbar";
import { Link } from "react-router";
import Home from "./Home";
import { ShimmerButton } from "../magicui/shimmer-button";
import Footer from "../ui/Footer";

const NotFound = () => {
  return (
    <div className="font-GeneralSans-Regular">
      <header>
        <Navbar />
      </header>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold">404 </h1>
        <p>Sorry, Page Not Found</p>

        <Link to="/" element={<Home />} className="my-8">
          <ShimmerButton className="  py-3 px-10">Back to Home</ShimmerButton>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
