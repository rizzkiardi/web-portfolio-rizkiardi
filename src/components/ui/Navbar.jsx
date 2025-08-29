import { assets } from "@/assets/assets";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  // Preloader
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // aktifkan efek jika scroll lebih dari 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Preloader

  // side menu
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  // side menu

  return (
    <div
      className={`font-GeneralSans-Regular fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? "backdrop-blur bg-white/5 shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container max-w-6xl mx-auto flex items-center ">
        <div>
          <Link to="/" className="flex gap-1 ">
            <img src={assets.logo} alt="Logo rizkiardi" width="30" />
            rizkiardi
          </Link>
        </div>
        <ul className="hidden md:flex md:flex-end justify-end gap-5 ml-auto">
          <li>
            <Link to="/" className="hover:text-[#FFFFFF]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#FFFFFF]">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-[#FFFFFF]">
              Projects
            </Link>
          </li>
          <li>
            <a
              href="/CV-RizkiSeptiArdi.pdf"
              download
              className="flex hover:text-[#FFFFFF]"
            >
              <img src={assets.download_icon} alt="Icon Download" />
              Resume
            </a>
          </li>
        </ul>
        <div className=" flex items-center flex-rows gap-5 max-md:ml-auto">
          <button
            className="block md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HamburgerMenu isOpen={isOpen} />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          className={`flex flex-col gap-5 md:hidden py-10 px-10 fixed top-14 right-0 h-screen w-[40%] bg-[#2D2D2D]/95 z-40 transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <li>
            <Link to="/" className="hover:text-[#FFFFFF]" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#FFFFFF]"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-[#FFFFFF]"
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <a
              href="/CV-RizkiSeptiArdi.pdf"
              download
              className="flex hover:text-[#FFFFFF]"
              onClick={closeMenu}
            >
              <img src={assets.download_icon} alt="Icon Download" />
              Resume
            </a>
          </li>
        </ul>
        {/* Overlay (klik di luar untuk close) */}
        {/* {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={closeMenu}
          />
        )} */}
      </nav>
    </div>
  );
};

export default Navbar;
