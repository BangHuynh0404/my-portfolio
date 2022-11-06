import styled from "@emotion/styled"
import { css } from "@emotion/react"

interface StyledCustomNavbarProps {
   sidebarActive: boolean
};

const StyledCustomNavbar = styled.div`${(props: StyledCustomNavbarProps) => {
   let root = "o-customNavbar";
   return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      width: 100%;
      height: 65px;
      /* Glass effect */
      background: rgba(255, 255, 255, 1);
      border-bottom: 1px whitesmoke solid;
      z-index: 999;

      .${root}_leftMenu {
         padding-right: 15px;
         transform: rotateY(0deg);
         transition: all 0.3s ease-in-out;
         transform: ${props.sidebarActive && 'rotateY(180deg)'};

         z-index: 3;
      }

      .${root}_rightMenu {
         display: flex;
         justify-content:flex-end;
         padding: 0 10px 0 0;

         .mantine-Menu-dropdown { 
            left: calc(100vw - 225px) !important;
         }
      }
     
     
      
   `;
}}
`;

export default StyledCustomNavbar;
