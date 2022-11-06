import React from "react";
import StylesIntroCard from "./styles";
import introImage from "../../../assets/json/programming-computer.json";
import Lottie from "react-lottie-player";
export interface IntroCardProps {
}

const IntroCard: React.FC<IntroCardProps> = () => {
  //Some Logic
  return (
    <StylesIntroCard className="o-introCard">
      <div className="o-introCard_content">
        <div className="o-introCard_title">
          <span>
            Welcome! <br /> My name is Bang,<br /> I'm a Front-end Developer.
          </span>
        </div>
        <div className="o-introCard_desc">
          <span>
            Let's me introduce myself ...
          </span>
        </div>
      </div>

      <div className="o-introCard_image">
        <Lottie
          loop
          animationData={introImage}
          play
        />
      </div>
    </StylesIntroCard>
  );
};

IntroCard.defaultProps = {
  children: undefined,
};

export default IntroCard;
