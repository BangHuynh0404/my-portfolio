import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { scrollBars } from "../../styles/function";

const StylesStaffManagement = styled.div`
   padding: 50px;

   iframe {
      width: 100%;
      height: 100%;
      border-radius: 16px;
      border: 1px green solid;
      height: 85vh;
      ${scrollBars(4, 'green', 'whitesmoke', 50, 20)};
   }

`;

export default StylesStaffManagement;
