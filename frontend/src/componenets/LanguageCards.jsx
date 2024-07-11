import LanguageCard from "./LanguageCard";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const LanguageCards = ({ isHome = false }) => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const res = await fetch("/api/api/languages");
        const data = await res.json();
        setLanguages(data);
      } catch (error) {
        console.error("Error fetching languages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLanguages();
  }, []);

  const displayedLanguages = isHome ? languages.slice(0, 3) : languages;

  return (
    <div className="flex items-center justify-center  bg-gradient-to-r from-blue-300 via-blue-50 to-white">
      <section className="max-w-screen-lg mx-auto my-10 p-5 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-500">
          Programming Languages & Frameworks
        </h2>
        <p className="mt-8 text-gray-600 text-center">
          A selection of the programming languages and frameworks I have
          experience with. Click on the card to see the projects.
        </p>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedLanguages.map((language) => (
              <LanguageCard key={language._id} language={language} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default LanguageCards;
