import styled, { css } from "styled-components";
import { DropdownProps } from ".";

interface StyledDropdownProps extends DropdownProps {
   // Custom Props
};

const StyledDropdown = styled.div`${(props: StyledDropdownProps) => {
   let root = "m-dropdown";
   return css`
   
   `;
}}
`;

export default StyledDropdown;
