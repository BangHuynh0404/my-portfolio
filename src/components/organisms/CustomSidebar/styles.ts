import styled, { css } from "styled-components";
import { CustomSidebarProps } from ".";

interface StyledCustomSidebarProps extends CustomSidebarProps {
   // Custom Props
};

const StyledCustomSidebar = styled.div`${(props: StyledCustomSidebarProps) => {
   let root = "o-customSidebar";
   return css`
   
   `;
}}
`;

export default StyledCustomSidebar;
