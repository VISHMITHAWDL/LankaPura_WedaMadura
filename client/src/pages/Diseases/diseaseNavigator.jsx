import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const DiseaseNavigator = () => {
  const diseasePages = [
  { path: '/covid19', label: 'Covid 19' },
  { path: '/dengue', label: 'Dengue' },
  { path: '/kidneydisease', label: 'Kidney Disease (C.K.D)' },
  { path: '/liverdisease', label: 'Liver Diseases' },
  { path: '/alltypeofcancers', label: 'All Type of Cancers' },
  { path: '/diabetic', label: 'Diabetic' },
  { path: '/leptospirosis', label: 'Leptospirosis' },
  { path: '/std', label: 'Sexually Transmitted Diseases' },
  { path: '/itp', label: 'I.T.P' },
  { path: '/infertility', label: 'Infertility' },
  { path: '/sciatica', label: 'Sciatica' },
  { path: '/nsd', label: 'Nervous System Diseases' },
  { path: '/migraine', label: 'Migraine' },
  { path: '/lunginfection', label: 'Lung Infection' },
  { path: '/lungdiseases', label: 'Lung Diseases' },
  { path: '/catarrh', label: 'Catarrh' },
  { path: '/arthritis', label: 'Arthritis' },
];  
  const location = useLocation();
  const navigate = useNavigate();

  const currentIndex = diseasePages.findIndex(d => d.path === location.pathname);

  if (currentIndex === -1) return null;

  const prevIndex = (currentIndex - 1 + diseasePages.length) % diseasePages.length;
  const nextIndex = (currentIndex + 1) % diseasePages.length;

  return (
    <div className="flex justify-end items-center mt-12 mb-8 gap-4 px-6">
      <button
        onClick={() => navigate(diseasePages[prevIndex].path)}
        className="flex items-center gap-2 px-6 py-3 text-black hover:text-[#348101]"
      >
        <FaArrowLeft className="text-sm" />
        <span className="font-medium font-Raleway">Previous</span>
      </button>

      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
        <span className="text-sm text-gray-600 font-medium font-Raleway">
          {currentIndex + 1} of {diseasePages.length}
        </span>
      </div>

      <button
        onClick={() => navigate(diseasePages[nextIndex].path)}
        className="flex items-center gap-2 px-6 py-3 text-black hover:text-[#348101]"
      >
        <span className="font-medium font-Raleway ">Next</span>
        <FaArrowRight className="text-sm" />
      </button>
    </div>
  );
};

export default DiseaseNavigator;
