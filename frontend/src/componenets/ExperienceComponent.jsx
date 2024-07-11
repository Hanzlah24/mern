import React from "react";

const ExperienceComponent = () => {
  return (
    <div className="flex items-start justify-center bg-gradient-to-r from-blue-300 via-blue-50 to-white">
      <section className="max-w-screen-lg mx-auto my-6 p-5 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-500">Experience</h2>
        <div className="mt-6">
          {/* <!-- Experience Item --> */}
          <div className="mt-6 border-t pt-4">
            <p className="text-lg font-bold text-gray-900">Summer Intern</p>
            <p className="text-gray-700">Irvine Tek | June 2024-continue</p>
            <p className="text-gray-600 mt-2">
              I am currently doing an internship at Irvine Tek, where I am
              working with Django and Python to develop web applications,
              gaining practical experience in back-end development and enhancing
              my programming skills.
            </p>
          </div>
          {/* <!-- Additional Experience Items can be added similarly --> */}
        </div>
      </section>
    </div>
  );
};

export default ExperienceComponent;
