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
      background: rgba(255, 255, 255, 0.53);
      border-bottom: 1px whitesmoke solid;
      backdrop-filter: blur(11.1px);
      -webkit-backdrop-filter: blur(11.1px);

      .${root}_leftMenu {
         padding-right: 15px;
         transform: rotateY(0deg);
         transition: all 0.3s ease-in-out;
         transform: ${props.sidebarActive && 'rotateY(180deg)'};
         background-color: white;
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
      @keyframes marquee{
            0%{transform: translateX(-400%);}
            100%{transform: translateX(400%);}
        }
      @media (prefers-reduced-motion: no-preference) {
            .moving-text{
                animation: marquee 25s linear infinite;
            }
        }
     
      
   `;
}}
`;

export default StyledCustomNavbar;
