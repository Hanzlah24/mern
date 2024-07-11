import React from "react";

const EducationComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-blue-50 to-white">
      <section className="max-w-screen-lg mx-auto my-10 p-5 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-500">Education</h2>
        <div className="mt-6">
          {/* <!-- Education Item --> */}
          <div className="mt-6 border-t pt-4">
            <p className="text-lg font-bold text-gray-900">
              Bachelor of Computer Science
            </p>
            <p className="text-gray-700">FAST University | 2022-continue</p>
            <p className="text-gray-600 mt-2">
              I am pursuing a Bachelor of Computer Science at FAST University,
              where I am developing my skills in various aspects of computer
              science and software development.
            </p>
          </div>
          {/* <!-- Education Item --> */}
          <div className="mt-6 border-t pt-4">
            <p className="text-lg font-bold text-gray-900">FSc Pre-Engineering</p>
            <p className="text-gray-700">Punjab College | 2020-2022</p>
            <p className="text-gray-600 mt-2">
              I completed my FSc Pre-Engineering at Punjab College, where I built
              a strong foundation in mathematics, physics, and chemistry,
              preparing me for advanced studies in engineering and technology.
            </p>
          </div>
          {/* <!-- Education Item --> */}
          <div className="mt-6 border-t pt-4">
            <p className="text-lg font-bold text-gray-900">
              Matric Science Group
            </p>
            <p className="text-gray-700">Sanai School System | 2010-2020</p>
            <p className="text-gray-600 mt-2">
              I completed my Matric from Sanai School System, where I gained a
              comprehensive education in basic sciences, developing a solid
              understanding of key scientific concepts and principles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationComponent;
