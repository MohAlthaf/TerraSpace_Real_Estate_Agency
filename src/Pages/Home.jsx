import  Navbar  from "../components/Navbar1";
import HeroSection from "../components/HeroSection";
import RealEstateInfo from "../components/RealEstateInfo";
import Services from "../components/Services";
import ExpertiseSection from "../components/ExpertiseSection";
import AboutUs from "../components/AboutUs";
import ArchitectureHero from "../components/ArchitectureHero";

const Home = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <HeroSection />
      <RealEstateInfo />
      <div style={{ backgroundColor: "#fafafa" }}>
        <Services />
      </div>
      <AboutUs />
      <ExpertiseSection />
      {/* <CustomForm /> */}
      {/* <ContactForm /> */}
      <ArchitectureHero />
    </div>
  );
};

export default Home;
