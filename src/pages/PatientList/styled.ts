import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { scrollBars } from '../../styles/function';

const StylesPatientList = styled.div`
   max-height: 100%;
   padding: 20px 20px 40px 20px ;
   overflow: scroll;
   ${scrollBars(3, 'green', 'white', 5, 5)}
`;

export default StylesPatientList;
