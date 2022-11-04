import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { IntroCardProps } from ".";
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
      
      .${root}_content {
         display: flex;
         flex-direction: column;
         justify-content: center;
         flex: 70% 1 1;
         color: rgb(0, 82, 73);
         border-radius: 16px;
         padding: 44px 0 44px 40px;

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
         padding: -10px;
      }
   `;
}}
`;

export default StyledIntroCard;
