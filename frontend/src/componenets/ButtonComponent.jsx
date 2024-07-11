import React from "react";
import { Link } from "react-router-dom";
const ButtonComponent = ({ title = "Read More", link = "/about" }) => {
  return (
    <div className="flex mt-6 items-center justify-center">
      <Link
        to={link}
        id="custom-btn"
        className="mt-10 px-6 py-3 bg-black text-white text-lg font-bold rounded-full hover:bg-gray-800 transition duration-300"
      >
        {title}
      </Link>
    </div>
  );
};

export default ButtonComponent;
