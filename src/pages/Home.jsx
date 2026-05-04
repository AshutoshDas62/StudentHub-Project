
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import FeaturesShowcase from "../components/FeaturesShowcase";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <FeaturesShowcase />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
};

export default Home;