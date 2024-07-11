import Hero from "../componenets/Hero";
import LanguageCards from "../componenets/LanguageCards";
import ButtonComponent from "../componenets/ButtonComponent";

const HomePage = () => {
  return (
    <>
      <Hero />
      <LanguageCards isHome={true} />
      <ButtonComponent title="View All" link='/languages'/>
    </>
  );
};

export default HomePage;
