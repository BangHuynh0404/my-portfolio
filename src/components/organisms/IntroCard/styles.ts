import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { IntroCardProps } from ".";
import { mediaQuery } from "../../../styles/function";
interface StyledIntroCardProps extends IntroCardProps {
   // Custom Props
};

const StyledIntroCard = styled.div`${(props: StyledIntroCardProps) => {
   let root = "o-introCard";
   return css`
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      background: rgb(217,247,247);
      border-radius: 16px;
      max-height: 300px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      ${mediaQuery('tabletUp', (css`
         flex-direction: column;
         min-height: 500px;
         align-self: center
      `))}

      .${root}_content {
         display: flex;
         flex-direction: column;
         justify-content: center;
         flex: 70% 1 1;
         color: rgb(0, 82, 73);
         border-radius: 16px;
         padding: 44px 0 44px 40px;

         ${mediaQuery('tabletUp', (css`
            padding: 10px 0 10px 20px;
      `))}

         .${root}_title {
            span {
               font-weight: bold;
               font-size: 24px;
               line-height: 36px;
            }
         }

         .${root}_desc {
               padding: 24px 0;
         }
      }
      .${root}_image {
         display: flex;
         align-items: center;
         padding-top: 30px;
         ${mediaQuery('tabletUp', (css`
            height: 160px;
      `))}
      }
   `;
}}
`;

export default StyledIntroCard;
