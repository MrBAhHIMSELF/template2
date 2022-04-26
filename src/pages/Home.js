import React from "react";
import Carousel from "../components/Carousel/Carousel";
import { Content } from "../components/Content/Content";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import { heroOne, heroTwo, heroThree } from "../data/HeroData";

// Hero Feature Content Carousel

const Home = () => {
  const [firstBreed, setFirstBreed] = React.useState(null);
  const [lastBreed, setLastBreed] = React.useState(null);
  React.useEffect(() => {
    fetch(
      "https://data.cityofnewyork.us/resource/rsgh-akpg.json?$$app_token=3yrs3ewX0YYxoOpKKiJ0aWIxW"
    )
      .then((results) => results.json())
      .then((data) => {
        const { breed } = data.results[0];
        setFirstBreed(breed.first);
        setLastBreed(breed.last);
        console.log(breed.last);
      });
  }, []); // <-- Have to pass in [] here!

  return (
    <>
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Carousel />
    </>
  );
};

export default Home;
