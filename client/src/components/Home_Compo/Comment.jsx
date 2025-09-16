import React, { useState, useEffect } from 'react';

const AyurvedaTwoColumnCommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/api/comments/allcomments")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error("Error fetching comments:", err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommentIndex((prevIndex) =>
        prevIndex === comments.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [comments.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim() && userName.trim()) {
      try {
        const response = await fetch("http://localhost:3000/api/comments/addcomment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: userName,
            email: email,
            text: newComment,
          }),
        });

        if (response.ok) {
          const savedComment = await response.json();
          setComments([...comments, savedComment]);
          setNewComment("");
          setUserName("");
          setEmail("");
        }
      } catch (error) {
        console.error("Error submitting comment:", error);
      }
    }
  };

  const goToNextComment = () => {
    setCurrentCommentIndex((prevIndex) =>
      prevIndex === comments.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevComment = () => {
    setCurrentCommentIndex((prevIndex) =>
      prevIndex === 0 ? comments.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[playfair] font-semibold">
          <span className="text-black">COMMUNITY </span>
          <span className="text-[#348101]">EXPERIENCE</span>
        </h1>
        <div className="mt-3 h-1 w-24 bg-green-600 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Comment Slideshow */}
        <div className="bg-green-50 rounded-lg shadow-lg p-8 h-full flex flex-col min-h-[460px] md:min-h-full">
          <h3 className="text-2xl text-green-800 mb-8 flex items-center" style={{ fontFamily: 'Playfair Display, serif' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            What Our Patients Say
          </h3>

          {comments.length > 0 && (
            <div className="flex-grow relative">
              <div className="absolute inset-0 flex flex-col justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-600 relative">
                  <button
                    onClick={goToPrevComment}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-green-800"
                  >
                    ←
                  </button>

                  <div className="min-h-40">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-medium text-green-800" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        {comments[currentCommentIndex].name}
                      </h3>
                      <span className="text-base text-gray-500" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        {comments[currentCommentIndex].date}
                      </span>
                    </div>
                    <p className="text-lg text-gray-700" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      {comments[currentCommentIndex].text}
                    </p>
                  </div>

                  <button
                    onClick={goToNextComment}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-green-800"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center mt-10">
            {comments.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCommentIndex(index)}
                className={`w-3 h-3 mx-2 rounded-full focus:outline-none ${
                  currentCommentIndex === index ? 'bg-green-700' : 'bg-green-300'
                }`}
                aria-label={`Go to comment ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Comment Form */}
        <div className="bg-white rounded-lg shadow-lg border border-green-200 p-8">
          <h3 className="text-2xl text-green-800 mb-8 flex items-center" style={{ fontFamily: 'Playfair Display, serif' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Share Your Experience
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Your Name*</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Email (will not be published)</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Your Comment*</label>
              <textarea
                rows="6"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
                placeholder="Share your experience with our Ayurvedic treatments..."
              ></textarea>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <button
                type="submit"
                className="px-8 py-3 bg-green-700 text-white text-lg rounded-md hover:bg-green-800 transition duration-200 flex items-center mb-4 sm:mb-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Post Comment
              </button>
              <p className="text-base text-gray-500 sm:ml-4">* Required fields</p>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-green-100">
            <div className="flex items-center text-green-800 text-base">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Your comments help others benefit from Ayurvedic wisdom</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyurvedaTwoColumnCommentSection;
