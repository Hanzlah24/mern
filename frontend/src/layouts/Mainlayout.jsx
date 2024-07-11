import { Outlet } from "react-router-dom";
import Header from "../componenets/Header";
import Footer from "../componenets/Footer";
const Mainlayout = () => {
  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-blue-300 via-blue-50 to-white text-gray-900">
        <Outlet />
        <Footer />
      </section>
    </>
  );
};

export default Mainlayout;
