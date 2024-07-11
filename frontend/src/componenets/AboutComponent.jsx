import React from "react";

const AboutComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-blue-50 to-white">
      <section className="max-w-screen-lg mx-auto my-10 p-5 bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <img
          src="https://res.cloudinary.com/dxynahqsy/image/upload/v1720289485/me/ceqx7vldudwruqbc5lha.png"
          alt="Profile Picture"
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />
        <div className="md:ml-10 mt-6 md:mt-0 md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-gray-700">
            I am a Full Stack Developer proficient in both MERN stack and Django.
            I have a passion for building web applications and solving complex
            problems.
          </p>
          <div className="mt-6">
            <p className="text-lg">
              <span className="font-semibold">Name:</span> Muhammad Hanzala
            </p>
            <p className="text-lg mt-2">
              <span className="font-semibold">Date of birth:</span> March 1, 2005
            </p>
            <p className="text-lg mt-2">
              <span className="font-semibold">Address:</span> 163 Alhamd Gardens
              Pine Avenue Lahore
            </p>
            <p className="text-lg mt-2">
              <span className="font-semibold">Zip code:</span> 51000
            </p>
            <p className="text-lg mt-2">
              <span className="font-semibold">Email:</span> hanzlah1704@gmail.com
            </p>
            <p className="text-lg mt-2">
              <span className="font-semibold">Phone:</span> +92-311-7135622
            </p>
          </div>
          <a
            href="#"
            className="inline-block mt-8 px-6 py-3 bg-blue-500 text-white text-lg font-bold rounded-full hover:bg-blue-600 shadow-lg transition duration-300"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutComponent;
