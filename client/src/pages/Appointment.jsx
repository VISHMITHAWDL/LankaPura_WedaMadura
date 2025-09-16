
import React, { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import landing from "../assets/Home_Assets/landing_banneri.jpg";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    village: "",
    date: "",
    timeSlot: "",
    disease: "",
  });

  const allTimeSlots = [
    "9:00 AM- 9.15 AM",
    "9:15 AM- 9.30 AM",
    "9:30 AM- 9.45 AM",
    "9:45 AM- 10.00 AM",
    "10:00 AM- 10.15 AM",
    "10:15 AM- 10.30 AM",
    "10:30 AM- 10.45 AM",
    "10:45 AM- 11.00 AM",
    "11:00 AM- 11.15 AM",
    "11:15 AM- 11.30 AM",
    "11:30 AM- 11.45 AM",
    "11:45 AM- 12.00 PM",
    "1:30 PM- 1.45 PM",
    "1:45 PM- 2.00 PM",
    "2:00 PM- 2.15 PM",
    "2:15 PM- 2.30 PM",
    "3:30 PM- 3.45 PM",
    "3:45 PM- 4.00 PM",
    "4:00 PM- 4.15 PM",
    "4:15 PM- 4.30 PM",
    "4:30 PM- 4.45 PM",
    "4:45 PM- 5.00 PM",
  ];

  const getAvailableTimeSlots = () => {
    if (!formData.date || !formData.disease) return [];

    const selectedDate = new Date(formData.date);
    const dayOfWeek = selectedDate.getDay();
    const disease = formData.disease;

    if (disease === "dengue" || disease === "corona") {
      return allTimeSlots;
    } else {
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        return allTimeSlots.slice(0, 16);
      } else if (dayOfWeek === 1) {
        return allTimeSlots.slice(0, 14);
      } else {
        return [];
      }
    }
  };

  const availableTimeSlots = getAvailableTimeSlots();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSlotSelect = (slot) => {
    setFormData({ ...formData, timeSlot: slot });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.timeSlot) {
      alert("Please select a time slot!");
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/appointments/createAppointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Appointment Data:", data);
        alert("Appointment booked successfully!");
        setFormData({
          name: "",
          age: "",
          village: "",
          date: "",
          timeSlot: "",
          disease: "",
        });
      } else {
        alert("There was an error booking the appointment!");
      }
    } catch (error) {
      console.error("There was an error booking the appointment!", error);
      alert("There was an error booking the appointment!");
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      {/* Cover Image Banner */}
      <div className="w-full h-96 relative overflow-hidden">
        <img src={landing} alt="LankaPura Ayurveda" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      </div>
      <div className="flex justify-center">
        <h1 className="text-center">
          <h1 className="text-center font-[Raleway] mt-10 text-2xl tracking-[.4em]">
           Ancient wisdom for modern wellness
          </h1>
          <span className="text-6xl font-[Playfair] font-bold text-black">SCHEDULE YOUR </span>
          <span className="text-[#348101] text-6xl font-[Playfair] font-bold">HEALING JOURNEY</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12" style={{ fontFamily: "'Raleway', sans-serif" }}>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Form Header */}
          <div className="bg-green-50 px-6 py-8 border-b border-green-100">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-2xl text-green-900" style={{ fontFamily: "'Playfair Display', serif" }}>Book Your Appointment</h2>
            </div>
            <div className="p-4 bg-green-100 border-l-4 border-green-500 text-green-900 rounded">
              <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Appointment Booking Guidelines</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>For Dengue and Corona Patients:</strong><br />
                  Time slots are available <strong>every day</strong> from <strong>9:00 AM to 5:00 PM</strong>.
                </p>
                <p>
                  <strong>For Other Treatments:</strong><br />
                  Time slots are available only on:<br />
                  - <strong>Saturday and Sunday:</strong> From <strong>9:00 AM to 5:00 PM</strong>.<br />
                  - <strong>Monday:</strong> From <strong>9:30 AM to 4:00 PM</strong>.
                </p>
                <p>No slots are available on other weekdays.</p>
                <p className="italic">Please select the appropriate date and treatment type to view available time slots.</p>
              </div>
            </div>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="Enter your age"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Village/Location</label>
                <input
                  type="text"
                  name="village"
                  value={formData.village}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="Enter your village or location"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Treatment Type</label>
              <select
                name="disease"
                value={formData.disease}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                required
              >
                <option value="" disabled>Select your treatment type</option>
                <option value="dengue">Dengue Treatment</option>
                <option value="corona">COVID-19 Treatment</option>
                <option value="other">Other Ayurvedic Treatments</option>
              </select>
            </div>

            {availableTimeSlots.length > 0 ? (
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Clock className="w-4 h-4 text-green-600 mr-2" />
                  <label className="text-sm font-medium text-gray-700">Available Time Slots</label>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {availableTimeSlots.map((slot, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`px-3 py-2 text-sm rounded-md border transition ${
                        formData.timeSlot === slot
                          ? "bg-green-600 text-white border-green-600"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-green-50"
                      }`}
                      onClick={() => handleSlotSelect(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              formData.date && formData.disease && (
                <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800">
                  No time slots available for the selected date and treatment type. Please select a different date.
                </div>
              )
            )}

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-4 rounded-lg transition flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Font Import - Add these to your index.html or App.js */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Raleway:wght@300;400;500;600&display=swap');
        `}
      </style>
    </div>
  );
};

export default AppointmentForm;