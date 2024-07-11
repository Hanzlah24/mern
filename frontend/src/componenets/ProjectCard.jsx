import React from "react";
import { Link } from "react-router-dom";
import { FaProjectDiagram } from "react-icons/fa"; // Example icon, you can choose any other icon from react-icons

const ProjectCard = ({ project }) => {
  const maxDescriptionLength = 100; // Maximum length of the description before truncation
  const shortenedDescription =
    project.description.length > maxDescriptionLength
      ? project.description.slice(0, maxDescriptionLength) + "..."
      : project.description;

  return (
    <>
      <Link
        to={`/projects/${project._id}`}
        className="service-card p-6 bg-white rounded-lg shadow-lg text-center hover:bg-blue-500 hover:text-white transition duration-300"
      >
        <div className="service-icon text-blue-500 mb-4">
          <FaProjectDiagram className="h-16 w-16 mx-auto" />
        </div>
        <h3 className="text-xl font-bold mb-4">{project.title}</h3>
        <p className="text-gray-600">{shortenedDescription}</p>
      </Link>
    </>
  );
};

export default ProjectCard;
