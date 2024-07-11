import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ loading }) => {
  const overRide = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <section className="bg-gradient-to-r from-blue-300 via-blue-50 to-white text-gray-900">
      <ClipLoader
        color="black"
        loading={loading}
        cssOverride={overRide}
        size={150}
      />
    </section>
  );
};

export default Spinner;
