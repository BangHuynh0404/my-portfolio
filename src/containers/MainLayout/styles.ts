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
         transition: all 0.3s ease-in-out;
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

     
`;
}}
`;

export default StyledMainLayout;
