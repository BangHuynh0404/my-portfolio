import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { InfoCardProps } from ".";

interface StyledInfoCardProps extends InfoCardProps {
   // Custom Props
};

const StyledInfoCard = styled.div`${(props: StyledInfoCardProps) => {
   let root = "o-infoCard";
   return css`
      background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 50.1% );
      min-height: 200px;
      width: 100%;
      border-radius: 16px;
      padding: 24px;

      .${root}_title{
         font-size: 32px;
         font-weight: bold;
      }
      .${root}_icon{

      }
      .${root}_content{

      }
   `;
}}
`;

export default StyledInfoCard;
