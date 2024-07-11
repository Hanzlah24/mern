import React from "react";
import { Link } from "react-router-dom";
const LanguageCard = ({ language }) => {
  return (
    <>
      <Link
        to={`/languages/${language._id}`}
        className="service-card p-6 bg-white rounded-lg shadow-lg text-center hover:bg-blue-500 hover:text-white transition duration-300"
      >
        <div className="service-icon text-blue-500 mb-4">
          <img
            src={language.logo}
            alt="https://res.cloudinary.com/dxynahqsy/image/upload/v1720281598/logos/htxuroomlho3eltt35t5.png"
            className="h-16 mx-auto"
          />
        </div>
        <h3 className="text-xl font-bold mb-2">{language.name}</h3>
        <p className="text-gray-600">{language.description}</p>
      </Link>
    </>
  );
};

export default LanguageCard;
