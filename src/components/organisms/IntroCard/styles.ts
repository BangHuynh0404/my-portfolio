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
      /* overflow: hidden; */
      display: flex;
      justify-content: space-between;
      background-image: linear-gradient( 109.6deg,  rgba(61,245,167,0.5) 11.2%, rgba(9,111,224,0.5) 91.1% );
      border-radius: 16px;
      max-height: 300px;
      box-shadow: rgb(90 114 123 / 11%) 0px 7px 30px 0px;

      ${mediaQuery('tabletUp', (css`
         flex-direction: column;
         min-height: 400px;
         align-self: center;
         justify-content: center;
         background-image: none;
         /* border: 0; */
         box-shadow: none;
      `))};

      .${root}_content {
         display: flex;
         flex-direction: column;
         justify-content: center;
         flex: 80% 1 1;
         color: rgb(0, 82, 73);
         border-radius: 16px;
         padding: 44px 0 44px 40px;

         ${mediaQuery('tabletUp', (css`
            padding: 0 16px;
            flex: 30% 1 1;
            max-height: 250px;
            
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
         justify-content: center;
         padding-top: 30px;
         
         ${mediaQuery('tabletUp', (css`
            height: 150px;
            padding: 0;
            
            div > svg {
               max-height: 200px;
            }
         `))}
      }
   `;
}}
`;

export default StyledIntroCard;
