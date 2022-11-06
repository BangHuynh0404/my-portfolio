import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { IntroSliderProps } from ".";

interface StyledIntroSliderProps extends IntroSliderProps {
   // Custom Props
};

const StyledIntroSlider = styled.div`${(props: StyledIntroSliderProps) => {
   let root = "o-introSlider";
   return css`   
      width: 100%;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
   `;
}}
`;

export default StyledIntroSlider;
