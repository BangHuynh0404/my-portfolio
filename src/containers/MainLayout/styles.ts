import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { scrollBars } from "../../styles/function";

interface StyledMainLayoutProps {
    sideActive?: boolean;
}

const StyledMainLayout = styled.div`${(props: StyledMainLayoutProps) => {
    let root = "c-MainLayout";

    return css`
     display: flex;

     .${root}_sidebar {
         width: 265px;
         transition: all 0.3s ease-in-out;
         width: ${props.sideActive && '75px'};
         overflow-x: hidden;
     }
     .${root}_main {
         width: calc(100vw - 265px);
         transition: width 0.3s ease-in-out;
         width: ${props.sideActive && "100vw"};    
         height: 100vh;
         ${scrollBars(4, 'green', 'whitesmoke', 50, 20)}
         overflow: auto;

         .${root}_content {
            display: flex;
            flex-direction: column;
        }
     }

     .test {
         height: 1000px;
         width: 200px;
         background-color: yellow;
     }

     @keyframes marquee{
            0%{transform: translateX(-200%);}
            100%{transform: translateX(200%);}
        }
      @media (prefers-reduced-motion: no-preference) {
            .moving-text{
                animation: marquee 30s linear infinite;
                position: absolute;
                bottom:2px;
            }
        }
     
`;
}}
`;

export default StyledMainLayout;
