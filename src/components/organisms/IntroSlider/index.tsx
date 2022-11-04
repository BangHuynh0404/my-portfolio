import React from "react";
import { Carousel } from "@mantine/carousel";
import StylesIntroSlider from "./styles";

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
        withIndicators
        height={265}
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
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </StylesIntroSlider>
  );
};

IntroSlider.defaultProps = {
  children: undefined,
};

export default IntroSlider;
