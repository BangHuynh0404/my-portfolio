import styled, { css } from "styled-components";
import { CustomSidebarProps } from ".";
import { toRem } from "../../../styles/function";

interface StyledCustomSidebarProps extends CustomSidebarProps {
   isOpen?: boolean;
}

const StyledCustomSidebar = styled.div`${(props: StyledCustomSidebarProps) => {
   let root = "o-customSidebar";
   return css`
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
      width: ${toRem(250)};
      transition: all 0.3s ease-in-out;
      width: ${props?.isOpen && toRem(50)};
      height: calc(98vh - ${toRem(60)});
      z-index: 2;
      padding: 15px 5px 0 5px;

      .mantine-NavLink-root{
         margin-bottom: 5px;
      }
      
      .mantine-NavLink-label {
         font-size:  16px !important;
      }
   `;
}}
`;

export default StyledCustomSidebar;
