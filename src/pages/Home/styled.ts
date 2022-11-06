import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mediaQuery } from "../../styles/function";

const StylesHome = styled.div`
   padding: 70px 100px;
   overflow: hidden;
   ${mediaQuery('mobileUp', (css`
       padding: 20px 16px;

   `))}
`;

export default StylesHome;
