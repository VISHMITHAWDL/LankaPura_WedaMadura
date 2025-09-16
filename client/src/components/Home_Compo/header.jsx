import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/Home_Assets/Logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setHeaderVisible(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const linkClass = (isActive) =>
    `relative group font-[Raleway] text-sm ${
      isActive ? "text-[#EEE183]" : "text-white"
    } hover:text-[#EEE183]`;

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/ourtreat", name: "Our Treatments" },
    { path: "/products", name: "Products" },
    { path: "/blog", name: "Blog" },
    { path: "/aboutus", name: "About Us" },
    { path: "/appointment", name: "Appointment" },
    { path: "/contactus", name: "Contact Us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full p-2 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#331806e4] shadow-lg" : "bg-transparent"
      } ${headerVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-1 ">
        {/* Logo Section */}
        <div className="flex items-center ">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="h-[30px] md:h-[40px] lg:h-[50px] w-auto "
            />
          </a>
          <div className="flex flex-col text-white ml-2">
            <span className="text-lg md:text-xl lg:text-xl font-normal font-[Raleway]">
              LANKAPURA
            </span>
            <span className="text-lg md:text-xl lg:text-xl font-normal font-[Raleway]">
              WEDAMADURA
            </span>
          </div>
        </div>

        {/* Desktop & Tablet Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map(({ path, name }, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) => linkClass(isActive)}
            >
              {name}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#EEE183] transition-all duration-300 ${
                  location.pathname === path ? "w-full" : "w-0"
                } group-hover:w-full`}
              ></span>
            </NavLink>
          ))}
        </nav>

        {/* Hamburger Menu Button for Mobile & Tablet */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl lg:hidden focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile & Tablet Dropdown Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-[#331806] shadow-lg transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-4 right-6 text-white text-2xl"
        >
          ✕
        </button>
        <ul className="flex flex-col items-center space-y-4 text-white py-10">
          {navLinks.map(({ path, name }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => linkClass(isActive)}
                onClick={closeMenu}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
