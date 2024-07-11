import React, { useEffect } from "react";
import { FaHome, FaUser, FaFileAlt, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuLinks = document.querySelectorAll("#mobile-menu .menu-link");

    const handleMenuToggle = () => {
      if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden");
        setTimeout(() => {
          mobileMenu.classList.add("open");
        }, 10); // small delay to ensure transition is applied
      } else {
        mobileMenu.classList.remove("open");
        setTimeout(() => {
          mobileMenu.classList.add("hidden");
        }, 200); // duration of transition
      }
    };

    menuBtn.addEventListener("click", handleMenuToggle);
    menuLinks.forEach(link => {
      link.addEventListener("click", handleMenuToggle);
    });

    // Cleanup the event listeners on component unmount
    return () => {
      menuBtn.removeEventListener("click", handleMenuToggle);
      menuLinks.forEach(link => {
        link.removeEventListener("click", handleMenuToggle);
      });
    };
  }, []);

  return (
    <>
      <header className="bg-gradient-to-r from-blue-300 via-blue-50 to-white shadow-md">
        <div className="mx-auto flex justify-between items-center py-4 px-6">
          <NavLink to="/" className="flex items-center flex-grow">
            <img
              src="https://res.cloudinary.com/dxynahqsy/image/upload/v1720289484/me/fivduv2n9vueewbqgeaq.png"
              alt="Logo"
              className="h-10 w-10 bg-white rounded-full"
            />
            <span className="ml-3 font-bold text-2xl text-gray-900">
              MERN Resume
            </span>
          </NavLink>
          <nav className="hidden md:flex space-x-12 text-gray-900">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              <FaHome />
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              <FaUser />
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              <FaFileAlt />
            </NavLink>
            <NavLink
              to="/languages"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              <FaBriefcase />
            </NavLink>
            <a href="mailto:hanzlah1704@gmail.com" className="nav-link">
              <FaEnvelope />
            </a>
          </nav>
          <div className="md:hidden">
            <button id="menu-btn" className="text-gray-900 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <nav id="mobile-menu" className="md:hidden bg-black text-white py-4 hidden">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'menu-link block px-4 py-2 hover:bg-gray-800 mobile-active' : 'menu-link block px-4 py-2 hover:bg-gray-800'}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? 'menu-link block px-4 py-2 hover:bg-gray-800 mobile-active' : 'menu-link block px-4 py-2 hover:bg-gray-800'}
        >
          About
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) => isActive ? 'menu-link block px-4 py-2 hover:bg-gray-800 mobile-active' : 'menu-link block px-4 py-2 hover:bg-gray-800'}
        >
          Resume
        </NavLink>
        <NavLink
          to="/languages"
          className={({ isActive }) => isActive ? 'menu-link block px-4 py-2 hover:bg-gray-800 mobile-active' : 'menu-link block px-4 py-2 hover:bg-gray-800'}
        >
          Projects
        </NavLink>
        <a href="mailto:hanzlah1704@gmail.com" className="menu-link block px-4 py-2 hover:bg-gray-800">
          Contact
        </a>
      </nav>
    </>
  );
};

export default Navbar;
