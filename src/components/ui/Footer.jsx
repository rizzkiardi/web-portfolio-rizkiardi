import { assets } from "@/assets/assets";
import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="font-GeneralSans-Regular">
      <footer className="">
        <div className="relative max-w-6xl mx-auto mt-10 py-3 text-sm border-t border-[#E4E4E4]/80  max-lg:mx-6">
          <div className="flex justify-start items-center my-5 gap-5">
            <div className="border-r-2 border-[#E4E4E4]/80 pr-5">
              <p className="">&copy; Copyright - {new Date().getFullYear()}</p>
              <p>built in Yogyakarta</p>
            </div>
            <div className="flex gap-3">
              <Link to="/" className="flex gap-1  ">
                <img src={assets.logo} alt="Logo rizkiardi" width="30" />
                rizkiardi
              </Link>

              <a href="https://github.com/rizzkiardi" className="flex gap-1  ">
                <img src={assets.github_white} alt="Logo Github" width="25" />
              </a>

              <a
                href="https://linkedin.com/in/rizkiardi"
                className="flex gap-1  "
              >
                <img
                  src={assets.linkedin_white}
                  alt="Logo LinkedIn"
                  width="25"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
