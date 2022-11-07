import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { InfoCardProps } from ".";
import { mediaQuery } from "../../../styles/function";

interface StyledInfoCardProps extends InfoCardProps {
   // Custom Props
};

const StyledInfoCard = styled.div`${(props: StyledInfoCardProps) => {
   let root = "o-infoCard";
   return css`
      display: flex;
      
      min-height: 200px;
      width: 100%;
      border-radius: 16px;
      padding: 24px;
      box-shadow: rgb(90 114 123 / 11%) 0px 7px 30px 0px;

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
