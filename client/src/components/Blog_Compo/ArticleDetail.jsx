import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import { Calendar, Clock, Heart } from "lucide-react";
import img from "../../assets/Blog_Assets/profile.png";
import bgTexture from "../../assets/Blog_Assets/brown-textured-background-photo.jpg"; // Background image

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("Invalid article ID");
      setLoading(false);
      return;
    }

    console.log("Fetching article with ID:", id);

    fetch(`http://localhost:3000/api/blogs/blogdetails/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched article data:", data);
        if (!data) {
          throw new Error("Article not found");
        }
        setArticle(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown Date";
    return format(new Date(dateString), "MMMM dd, yyyy");
  };

  if (loading)
    return <div className="mt-10 text-center text-gray-600">Loading...</div>;
  if (error)
    return <div className="mt-10 text-center text-red-600">{error}</div>;

  return (
    <div className="min-h-screen">
      <section
        className="relative pb-12"
        style={{
          backgroundImage: `url(${bgTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "450px",
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 50% 105%, 0 90%)",
        }}
      >
        <div className="max-w-6xl px-4 pt-24 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h1 className="mb-4 font-serif text-3xl text-gray-800 sm:text-4xl md:text-5xl">
                {article?.topic}
              </h1>
              <div className="flex items-center gap-4 mb-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{formatDate(article?.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>10 min read</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-6">
                <img
                  src={img}
                  alt="Author profile"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-800">
                    Dr Tharanga Wickramasooriya
                  </p>
                  <p className="text-sm text-gray-600">Ayurvedic Expert</p>
                </div>
              </div>
            </div>
            <div>
              {article.image && (
                <img
                  src={article.image}
                  alt={article.topic}
                  className="object-cover w-full h-auto shadow-lg rounded-2xl"
                  style={{
                    filter: "blur(0px)",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl px-4 mx-auto">
          {article?.subtitles?.map((subtitle, index) => (
            <div key={index} className="mb-6">
              <h2 className="font-serif text-xl text-gray-800 sm:text-2xl">
                {subtitle.title}
              </h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                {subtitle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl px-6 py-12 mx-auto text-center bg-[#e7e6e6] shadow-sm rounded-xl">
          <Heart className="w-12 h-12 mx-auto mb-4 text-rose-500" />
          <h3 className="mb-3 font-serif text-xl text-gray-800 sm:text-2xl">
            Start Your Spiritual Channeling Today
          </h3>
          <p className="mb-6 text-gray-600">
            Join Lankapura Weda Madura for authentic herbal treatments and
            holistic healing.
          </p>
          <button
            className="px-8 py-3 text-white transition-colors rounded-full bg-rose-500 hover:bg-rose-600"
            onClick={() => {
              navigate("/ourtreat");
              window.scrollTo(0, 0);
            }}
          >
            Begin Your Practice
          </button>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;
