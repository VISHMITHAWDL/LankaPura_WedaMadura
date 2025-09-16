import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

import img1 from "../../assets/Home_Assets/Gallery_Assets/1_(1).jpg";
import img2 from "../../assets/Home_Assets/Gallery_Assets/1 (2).jpg";
import img3 from "../../assets/Home_Assets/Gallery_Assets/1 (3).jpg";
import img4 from "../../assets/Home_Assets/Gallery_Assets/1 (4).jpg";
import img5 from "../../assets/Home_Assets/Gallery_Assets/1 (5).jpg";
import img6 from "../../assets/Home_Assets/Gallery_Assets/1 (6).jpg";
import img7 from "../../assets/Home_Assets/Gallery_Assets/1 (7).jpg";
import img8 from "../../assets/Home_Assets/Gallery_Assets/1 (8).jpg";
import img9 from "../../assets/Home_Assets/Gallery_Assets/1 (9).jpg";
import img10 from "../../assets/Home_Assets/Gallery_Assets/1 (10).jpg";
import img11 from "../../assets/Home_Assets/Gallery_Assets/1 (11).jpg";
import img12 from "../../assets/Home_Assets/Gallery_Assets/1 (12).jpg";
import img13 from "../../assets/Home_Assets/Gallery_Assets/1 (13).jpg";
import img14 from "../../assets/Home_Assets/Gallery_Assets/1 (14).jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
];

const Ourlocation = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-4">
      <div className="flex justify-center">
        <div className="text-center">
          <h2 className="font-[Raleway] mt-5 text-base md:text-2xl tracking-[.2em] md:tracking-[.4em]">
            Explore our Herbal Palace, where nature and wellness meet
          </h2>
          <h1 className="text-4xl md:text-6xl font-[playfair] font-bold text-black">
            OUR <span className="text-[#348101]">GALLERY</span>
          </h1>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-2 md:px-4 py-6 md:py-10">
        <div className="max-w-full md:max-w-[1000px] mx-auto border border-gray-300 rounded-lg shadow-md p-2 md:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {images.slice(0, 8).map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-32 md:h-48 object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition"
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 p-2">
          <div className="relative max-w-full md:max-w-3xl w-full">
            <button
              className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <img src={selectedImage} alt="Selected" className="w-full rounded-lg shadow-lg" />
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Ourlocation;

