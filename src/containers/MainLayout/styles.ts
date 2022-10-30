import styled, { css } from "styled-components";
import { toRem } from "../../styles/function";


interface StyledMainLayoutProps {
};

const StyledMainLayout = styled.div`${(props: StyledMainLayoutProps) => {
   let root = "c-MainLayout";
   return css`
      main {
         width: 100%;
         height: calc(100vh - ${toRem(60)}) ;
         display: flex;
         overflow-y: hidden;
         
      }
      .${root}_content{
         max-height: calc(100vh - ${toRem(60)});    
             
      }
      .mantine-NavLink-label {
         color: #014268;
      }
   `;
}}
`;

export default StyledMainLayout;
