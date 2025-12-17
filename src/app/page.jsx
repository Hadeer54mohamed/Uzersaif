"use client";

import Hero from "../components/home/Hero";
import FeaturedTrips from "../components/home/FeaturedTrips.jsx";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FAQ from "../components/home/FAQ";
import Testimonials from "../components/home/Testimonials";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
     <Navbar transparent />
      <Hero />
      <FeaturedTrips />
      <WhyChooseUs />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
