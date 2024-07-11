import React from 'react';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProjectComponent = ({ project }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This will take the user back to the previous page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-blue-50 to-white">
      <section className="max-w-screen-lg mx-auto my-10 p-5 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-500 text-center mb-6">{project.title}</h2>
        <img
          src={project.logo}
          alt="Project Logo"
          className="w-full rounded-lg shadow-lg mb-6"
        />
        <div>
          <h3 className="text-2xl font-semibold text-blue-500">Description</h3>
          <p className="mt-2 text-gray-700">{project.description}</p>
          <h3 className="mt-4 text-2xl font-semibold text-blue-500">Explanation</h3>
          <p className="mt-2 text-gray-700">{project.explanation}</p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center">
            <a
              href="https://github.com/Hanzlah17"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-blue-500 text-white hover:bg-blue-600 transition duration-300 mb-4 sm:mb-0 sm:mr-4"
            >
              <FaGithub className="mr-2" />
              Visit on GitHub
            </a>
            <button
              onClick={handleBackClick}
              className="btn bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-300"
            >
              <FaArrowLeft className="mr-2" />
              Back
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectComponent;
