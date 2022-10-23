import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonProps } from ".";

interface StyledButtonProps extends ButtonProps {
   // Custom Props
};

const StyledButton = styled.div`${(props: StyledButtonProps) => {
   let root = "a-button";
   return css`
   
   `;
}}
`;

export default StyledButton;
