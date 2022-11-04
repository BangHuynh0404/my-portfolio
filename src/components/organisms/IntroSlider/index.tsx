import React from "react";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import StylesIntroSlider from "./styles";
import quoteImg1 from "../../../assets/images/quote-1.png";
import quoteImg2 from "../../../assets/images/quote -2.png";
export interface IntroSliderProps {
  children?: React.ReactNode;
}

const IntroSlider: React.FC<IntroSliderProps> = ({ children }) => {
  //Some Logic
  return (
    <StylesIntroSlider className="o-introSlider">
      <Carousel
        sx={{ maxWidth: "100%", backgroundColor: "white", borderRadius: 16 }}
        mx="auto"
        align="center"
        height={265}
        withIndicators
        styles={{
          indicator: {
            width: 12,
            height: 4,
            transition: "width 250ms ease",

            "&[data-active]": {
              width: 40,
            },
          },
        }}
      >
        <Carousel.Slide>
          <Image
            src={quoteImg1}
            fit={"cover"}
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src={quoteImg2}
            fit={"cover"}
          />
        </Carousel.Slide>
      </Carousel>
    </StylesIntroSlider>
  );
};

IntroSlider.defaultProps = {
  children: undefined,
};

export default IntroSlider;
