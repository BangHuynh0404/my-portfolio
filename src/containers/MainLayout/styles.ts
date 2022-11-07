import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mediaQuery, scrollBars } from "../../styles/function";

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

         ${mediaQuery('mobileUp', (css`
            position: absolute;
            margin-top: 65px;
            left: -100%;
            width: 100%;
            left:${!props.sideActive && 0} ;
            background-color: white;
            z-index: 5;
        `))}
     }
     .${root}_main {

        width: calc(100vw - 265px);
        transition: width 0.3s ease-in-out;
        width: ${props.sideActive && "100vw"};    
        height: 100vh;
        overflow: auto;
        ${scrollBars(4, 'green', 'whitesmoke', 50, 20)}

        ${mediaQuery('mobileUp', (css`
            width: 100% ;
        `))}

        .${root}_content {
            display: flex;
            flex-direction: column;
        }
     }
`;
}}
`;

export default StyledMainLayout;
