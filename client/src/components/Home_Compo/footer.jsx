import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import logo from "../../assets/Home_Assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#3D1E0D] text-white p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Left Section - About */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Lankapura Wedamadura" className="w-28 md:w-32 mb-4" />
            <div className="flex flex-col text-white">
              <span className="text-lg md:text-xl lg:text-2xl font-normal leading-tight font-[Raleway]">
                LANKAPURA
              </span>
              <span className="text-lg md:text-xl lg:text-2xl font-normal leading-tight font-[Raleway]">
                WEDAMADURA
              </span>
            </div>
          </div>

          <p className="text-sm leading-relaxed mt-4 max-w-xs">
            Discover the essence of wellness at our Ayurvedic Medical Center. Experience holistic healing through ancient traditions, tailored treatments, and natural remedies.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/Dr.Tharanga.Kumari.Wickramasooriya/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl cursor-pointer hover:text-gray-400" />
            </a>
            <a href="https://lk.linkedin.com/in/tharanga-kumari-wickramasooriya-61a9531ba" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl cursor-pointer hover:text-gray-400" />
            </a>
            <a href="https://x.com/drtharanga?lang=en" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl cursor-pointer hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex flex-col items-center md:items-start md:ml-10 lg:ml-20">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/ourtreat" className="hover:text-gray-400">Our Treatments</a></li>
            <li><a href="/products" className="hover:text-gray-400">Products</a></li>
            <li><a href="/appointment" className="hover:text-gray-400">Appointment</a></li>
            <li><a href="/blog" className="hover:text-gray-400">Blog</a></li>
            <li><a href="/aboutus" className="hover:text-gray-400">About Us</a></li>
            <li><a href="/contactus" className="hover:text-gray-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Address</h3>
          <p className="flex items-center justify-center md:justify-start"><MdLocationOn className="mr-2" /> Perumanagoda, Aluthwala, Ambalangoda</p>

          <h3 className="text-lg font-semibold mt-4">Contact No.</h3>
          <p className="flex items-center mt-2"><MdPhone className="mr-2" /> +94 91 79 14 202</p>
          <p className="flex items-center"><MdPhone className="mr-2" /> +94 77 85 80 474</p>

          <h3 className="text-lg font-semibold mt-4">Email</h3>
          <p className="flex items-center mt-2"><MdEmail className="mr-2" /> wickramasooriyatharanga@gmail.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-8 pt-4 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm">
        <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Lankapura Wedamadura. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-400">Terms of Services</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
