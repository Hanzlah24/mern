import React from 'react';
import { FaCode, FaCommentDots, FaPuzzlePiece } from 'react-icons/fa';

const SkillComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-blue-50 to-white">
      <section className="max-w-screen-lg mx-auto my-10 p-5 bg-white rounded-lg shadow-lg w-full">
        <h2 className="text-3xl font-bold text-blue-500 text-center">Skills</h2>
        <div className="mt-6 flex justify-center flex-wrap gap-8">
          {/* Skill Card */}
          <div className="skill-card flex flex-col items-center p-6 border rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="relative circular-progress" style={{ "--progress": "95%" }}>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-900">
                95%
              </div>
            </div>
            <FaCommentDots className="mt-4 text-4xl text-blue-500" />
            <p className="mt-4 text-lg font-semibold">Communication</p>
          </div>
          {/* Skill Card */}
          <div className="skill-card flex flex-col items-center p-6 border rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="relative circular-progress" style={{ "--progress": "97%" }}>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-900">
                97%
              </div>
            </div>
            <FaCode className="mt-4 text-4xl text-blue-500" />
            <p className="mt-4 text-lg font-semibold">Programming</p>
          </div>
          {/* Skill Card */}
          <div className="skill-card flex flex-col items-center p-6 border rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="relative circular-progress" style={{ "--progress": "90%" }}>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-900">
                90%
              </div>
            </div>
            <FaPuzzlePiece className="mt-4 text-4xl text-blue-500" />
            <p className="mt-4 text-lg font-semibold">Problem Solving</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillComponent;
