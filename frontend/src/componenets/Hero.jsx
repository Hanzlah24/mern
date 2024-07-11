import ButtonComponent from "./ButtonComponent";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-300 via-blue-50 to-white h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-md md:text-xl text-blue-600 font-bold">HEY! I AM</p>
        <h1 className="text-3xl md:text-8xl font-extrabold text-gray-900">
          Muhammad Hanzala
        </h1>
        <p className="text-xl md:text-3xl text-gray-900 mt-4">
          I'm a<span className="text-gray-700 font-bold"> Web Developer</span>
        </p>
        <ButtonComponent/>
      </div>
    </section>
  );
};

export default Hero;
