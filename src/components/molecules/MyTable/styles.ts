import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MyTableProps } from ".";

interface StyledMyTableProps extends MyTableProps {
   // Custom Props
};

const StyledMyTable = styled.div`${(props: StyledMyTableProps) => {
   let root = "m-myTable";
   return css`
   
   `;
}}
`;

export default StyledMyTable;
