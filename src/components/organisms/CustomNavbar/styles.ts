
import styled, { css } from "styled-components";
import { CustomNavbarProps } from ".";
import { toRem } from "../../../styles/function";

interface StyledCustomNavbarProps extends CustomNavbarProps {
   // Custom Props
};

const StyledCustomNavbar = styled.div`${(props: StyledCustomNavbarProps) => {
   let root = "o-customNavbar";
   return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      width: 100%;
      height: ${toRem(60)};
      

      .${root}_leftMenu {
         padding-right: 15px;
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
