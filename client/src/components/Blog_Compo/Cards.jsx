import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs/allblogs") // Updated API URL
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched articles:", data); // Assuming the response directly gives the articles
        setArticles(data);
      })
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div className="container p-6 mx-auto">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {articles.map((article) => (
          <div
            key={article._id}
            className="overflow-hidden transition-shadow bg-white border border-gray-200 shadow-lg cursor-pointer rounded-xl hover:shadow-2xl"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the parent div's onClick
              navigate(`/article2/${article._id}`); // Correct URL
            }}// Updated navigation path
          >
            <div className="relative">
              {article.image && (
                <img
                  src={article.image}
                  alt={article.topic}
                  className="object-cover w-full h-52"
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h2 className="text-xl font-semibold text-white">
                  {article.topic}
                </h2>
              </div>
            </div>
            <div className="p-5">
              {/* Extract the first subtitle as a preview */}
              {article.subtitles.length > 0 && (
                <p className="mt-3 text-sm leading-relaxed text-gray-600 line-clamp-5">
                  {article.subtitles[0].description}
                </p>
              )}
              <button
                className="w-full px-5 py-2 mt-4 text-[#ffffff] transition-all bg-[#867454] rounded-lg shadow-md hover:bg-[#74673e]"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the parent div's onClick
                  navigate(`/article2/${article._id}`); // Correct URL
                }}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
