import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { IntroCardProps } from ".";

interface StyledIntroCardProps extends IntroCardProps {
   // Custom Props
};

const StyledIntroCard = styled.div`${(props: StyledIntroCardProps) => {
   let root = "o-introCard";
   return css`
      width: 1000px;
      height: 500px;
      overflow: hidden;
   `;
}}
`;

export default StyledIntroCard;
