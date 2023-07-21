import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AreaContainer from "../components/AreaContainer";
import FeatureContainer from "../components/FeatureContainer";
import RentPropertiesContainer from "../components/RentPropertiesContainer";
import RentPropertiesForm from "../components/RentPropertiesForm";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real World</title>
        <meta name="description" content="Discover your perfect home" />
      </Head>
      <div className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start">
        <Header hamburger={false} />
        <Hero />
        <AreaContainer />
        <FeatureContainer />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <Contact />
        <Footer
          houseLine="/houseline2.svg"
          socialMediaLogo="/social-media-logo5.svg"
          socialMediaLogo1="/social-media-logo6.svg"
          socialMediaLogo2="/social-media-logo7.svg"
          socialMediaLogo3="/social-media-logo8.svg"
          socialMediaLogo4="/social-media-logo9.svg"
          propOverflow="unset"
        />
      </div>
    </>
  );
};

export default LandingPage;
