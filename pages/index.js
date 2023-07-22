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
      <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
        <Header hamburger={false} />
        <Hero />
        <AreaContainer />
        <FeatureContainer />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
