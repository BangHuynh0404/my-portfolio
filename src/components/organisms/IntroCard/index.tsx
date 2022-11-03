import React from "react";
import { Image } from "@mantine/core";
import StylesIntroCard from "./styles";
import introImage from "../../../assets/images/intro-coding.svg";
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
        <Image src={introImage} />
      </div>
    </StylesIntroCard>
  );
};

IntroCard.defaultProps = {
  children: undefined,
};

export default IntroCard;