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
        //console.log(data[0].borough)
        const breed = data[0];
        setFirstBreed(breed.borough);
        setLastBreed(breed.species);
        console.log(lastBreed);

        /*  const breed = data[1];
        setFirstBreed(breed.borough);
        setLastBreed(breed.species);
        console.log(lastBreed); 

        const breed = data[2];
        setFirstBreed(breed.borough);
        setLastBreed(breed.species);
        console.log(lastBreed); 

        const breed = data[3];
        setFirstBreed(breed.borough);
        setLastBreed(breed.species);
        console.log(lastBreed); 

        const breed = data[4];
        setFirstBreed(breed.borough);
        setLastBreed(breed.species);
        console.log(lastBreed); 

        const breed = data[5];
        setFirstBreed(breed.borough);
        setLastBreed(breed.species);
        console.log(lastBreed); */
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
