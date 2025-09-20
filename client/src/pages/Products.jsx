import { useEffect, useState } from "react";
import { ProductAPI } from "../api/client";
import landing from "../assets/Home_Assets/landing_banneri.jpg";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Importing star icons

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let ignore = false;
    ProductAPI.list()
      .then((data) => { if (!ignore) setProducts(Array.isArray(data) ? data : []); })
      .catch((err) => { if (!ignore) setError(err.message || 'Failed to load products'); })
      .finally(() => { if (!ignore) setLoading(false); });
    return () => { ignore = true; };
  }, []);

  const handleLearnMore = (id) => {
    navigate(`/productdes/${id}`);
  };

  // Function to generate stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400" />);
      }
    }
    return stars;
  };

  return (
    <div>
      {/* Banner Image */}
      <div className="relative w-full h-96">
        <img src={landing} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <div className="flex justify-center">
        <h1 className="text-center">
          <h1 className="text-center font-[Raleway] mt-10 text-2xl tracking-[.4em]">
            Lankapura - Where Nature Meets Pure Wellness
          </h1>
          <span className="text-6xl font-[Playfair] font-bold text-black">OUR </span>
          <span className="text-[#348101] text-6xl font-[Playfair] font-bold">PRODUCTS</span>
        </h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 mt-7">
        {loading && <div className="col-span-full text-center">Loading products...</div>}
        {error && <div className="col-span-full text-center text-red-600">{error}</div>}
        {!loading && !error && !products.length && <div className="col-span-full text-center">No products available.</div>}
        {!loading && !error && products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-lg rounded-2xl p-4 relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image Container */}
            <div className="relative w-full h-56 rounded-xl overflow-hidden">
              <img
                src={product.imageb}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => handleLearnMore(product._id)}
                  className="bg-white text-black py-2 px-5 rounded-lg font-semibold shadow-md hover:bg-[#348101] hover:text-white"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-5 flex items-center justify-between">
              {/* Name and Price (Left Side) */}
              <div>
                <h2 className="text-lg font-semibold font-[Raleway]">{product.name}</h2>
                <button className=" hover:bg-[#348101] transition-colors duration-300 text-black hover:text-white font-semibold px-4 py-1 rounded-xl shadow-md hover:shadow-lg">
                  <p className="text-md">VISIT OUR STORE</p>
                </button>

              </div>

              {/* Review Stars (Right Side) */}
              <div className="flex space-x-1">{renderStars(product.rating || 4.5)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
