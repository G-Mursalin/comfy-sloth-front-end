// React
import React from "react";
// Components
import Hero from "./Hero/Hero";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Services from "./Services/Services";
const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
    </main>
  );
};

export default Home;
