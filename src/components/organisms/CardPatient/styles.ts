import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { CardPatientProps } from ".";

interface StyledCardPatientProps {
   // Custom Props
};

const StyledCardPatient = styled.div`${(props: StyledCardPatientProps) => {
   let root = "o-cardPatient";
   return css`
      transition: all 0.3s ease-in-out;
      
      :hover {
         transform: scale(1.05);
      }

      .${root}_infoButton {
         text-decoration: none !important
      }
      .mantine-Badge-root {
         position: absolute;
         top: 10px;
         right: 10px;
      }
   `;
}}
`;

export default StyledCardPatient;
