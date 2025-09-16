import React, { useEffect, useRef, useState } from "react";
import Image from "../assets/Contact_Assets/CONTACT.jpg";
import RightImage from "../assets/Home_Assets/sam/5.jpg";
import stupa from "../assets/Contact_Assets/stupa.jpg";

const Contactus = () => {
  const treatmentHoursRef = useRef(null);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contactNumber: "",
    country: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (treatmentHoursRef.current) {
      observer.observe(treatmentHoursRef.current);
    }

    return () => {
      if (treatmentHoursRef.current) {
        observer.unobserve(treatmentHoursRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullname) newErrors.fullname = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.contactNumber) newErrors.contactNumber = "Contact number is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/contactus/createContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("ContactUs data:", data);
      alert("Create contact successfully!");
      setFormData({
        fullname: "",
        email: "",
        contactNumber: "",
        country: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("There was an error in contact!", error);
      alert("There was an error in contact!");
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Conditional Background */}
      <div className="hero-section ">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Contact Form - Shifted left on laptop */}
        <div className="relative w-full max-w-2xl md:w-3/4 lg:w-[45%] h-auto my-4 md:my-0 bg-white bg-opacity-20 backdrop-blur-lg p-6 md:p-8 rounded-lg shadow-xl animate-slide-in-left lg:ml-[10%]">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-2 font-[playfair]">Say Hello To Us, Get In Touch</h2>
          <p className="text-white text-sm md:text-base mb-6 font-[Raleway]">Reach out to us and we will respond as soon as we can.</p>

          <form className="space-y-4 md:space-y-6 " onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  className="p-3 bg-white bg-opacity-50 text-black rounded-md w-full outline-none custom-placeholder font-[Raleway]"
                  required
                />
                {errors.fullname && <p className="text-red-500 text-xs md:text-sm mt-1 font-[Raleway]">{errors.fullname}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="p-3 bg-white bg-opacity-50 text-black rounded-md w-full outline-none custom-placeholder font-[Raleway]"
                  required
                />
                {errors.email && <p className="text-red-500 text-xs md:text-sm mt-1 font-[Raleway]">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Contact number"
                  className="p-3 bg-white bg-opacity-50 text-black rounded-md w-full outline-none custom-placeholder font-[Raleway]"
                  required
                />
                {errors.contactNumber && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.contactNumber}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Country"
                  className="p-3 bg-white bg-opacity-50 text-black rounded-md w-full outline-none custom-placeholder font-[Raleway]"
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows="4"
                className="p-3 bg-white bg-opacity-50 text-black rounded-md w-full outline-none custom-placeholder font-[Raleway]"
                required
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.message}</p>}
            </div>

            <button 
              type='submit' 
              className="w-full bg-yellow-600 font-[Raleway] text-white py-3 rounded-md text-lg font-semibold hover:bg-yellow-700 transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Treatment Hours Section */}
      <div 
        ref={treatmentHoursRef} 
        className="flex flex-col lg:flex-row w-full justify-center items-center bg-white shadow-lg overflow-hidden"
      >
        <div className="w-full lg:w-1/2 max-w-4xl bg-white justify-center items-center p-8 lg:p-12 rounded-lg text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 font-[playfair]">Treatment Hours</h1>

          <div className="space-y-6">
            <div>
              <p className="text-xl lg:text-2xl font-semibold text-gray-800 font-[playfair]">Dengue & Corona</p>
              <ul className="mt-2 text-gray-600">
                <li className="text-lg font-[Raleway]">• Everyday: 9:00 am – 5:00 pm</li>
              </ul>
            </div>

            <div>
              <p className="text-xl lg:text-2xl font-semibold text-gray-800 font-[playfair]">For All Other Diseases</p>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li className="text-lg font-[Raleway]">• Saturday: 9:00 am – 5:00 pm</li>
                <li className="text-lg font-[Raleway]">• Sunday: 9:00 am – 5:00 pm</li>
                <li className="text-lg font-[Raleway]">• Monday: 9:30 am – 4:00 pm</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Right-side Image */}
        <div className="w-full lg:w-1/2 h-64 md:h-96 lg:h-auto flex justify-center items-center">
          <img 
            src={RightImage} 
            alt="Contact Us" 
            className="w-full h-full object-cover object-center lg:min-h-[500px]"
          />
        </div>
      </div>

      {/* Find Us Section with Map */}
      <div className="w-full py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 font-[playfair]">Find Us</h2>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Location Info */}
            <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 font-[playfair]">Our Location</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 font-[Raleway]">Address</p>
                    <p className="text-gray-600 mt-1 font-[Raleway]">Perumanagoda, Aluthwala, Ambalangoda</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 font-[Raleway]">Phone</p>
                    <p className="text-gray-600 mt-1 font-[Raleway]">+94 91 79 14 202</p>
                    <p className="text-gray-600 mt-1 font-[Raleway]">+94 77 85 80 474</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 font-[Raleway]">Email</p>
                    <p className="text-gray-600 mt-1 font-[Raleway]">wickramasooriyatharanga@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Embedded Google Map */}
            <div className="w-full lg:w-2/3">
              <div className="w-full h-96 rounded-lg shadow-md overflow-hidden">
                <iframe
                  title="Our Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.642896041968!2d80.13787417475017!3d6.178532893808916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae178528eafb2e7%3A0x8598bde01c500879!2sAluthwala%20Weda%20Gedara!5e0!3m2!1sen!2slk!4v1744196154783!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background-image: url(${stupa});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background-attachment: fixed;
        }

        @media (min-width: 1024px) {
          .hero-section {
            background-image: url(${Image});
            justify-content: flex-start;
            padding-left: 8%;
          }
        }

        @keyframes slide-in-left {
          0% {
            transform: translateX(-20%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }

        @keyframes fade-in-up {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .custom-placeholder::placeholder {
          color: #4a4a4a;
          opacity: 0.8;
        }

        /* Mobile-specific adjustments */
        @media (max-width: 767px) {
          .hero-section {
            background-attachment: scroll;
            background-position: 60% center;
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
        }

        /* Tablet-specific adjustments */
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-section {
            background-position: center 30%;
          }
        }
      `}</style>
    </div>
  );
};

export default Contactus;

//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.642896041968!2d80.13787417475017!3d6.178532893808916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae178528eafb2e7%3A0x8598bde01c500879!2sAluthwala%20Weda%20Gedara!5e0!3m2!1sen!2slk!4v1744196154783!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>