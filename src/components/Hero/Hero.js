import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="./assets/hero.mp4" autoPlay muted />
      <Container>
        <MainHeading>NYC Dog Bite Data</MainHeading>
        <HeroText>
          Dog bites pose a serious health risk to our communities and society.
          More than 4.5 million people are bitten by dogs each year in the
          United States, and more than 800,000 receive medical attention for dog
          bites, according to the U.S. Centers for Disease Control (CDC). At
          least half of those bitten are children
        </HeroText>
        <ButtonWrapper>
          <HeroButton>Learn Why Dogs Are Dangerous</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
