import { toRem } from 'styles/function';
import styled, { css } from "styled-components";
import { CustomNavbarProps } from ".";

interface StyledCustomNavbarProps extends CustomNavbarProps {
   // Custom Props
};

const StyledCustomNavbar = styled.div`${(props: StyledCustomNavbarProps) => {
   let root = "o-customNavbar";
   return css`
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      width: 100vw;
      height: ${toRem(30)};
   `;
}}
`;

export default StyledCustomNavbar;
