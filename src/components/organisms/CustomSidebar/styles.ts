import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { CustomSidebarProps } from ".";
import { toRem, textLineLimit, mediaQuery } from "../../../styles/function";

interface StyledCustomSidebarProps extends CustomSidebarProps {
   isOpen?: boolean;
}

const StyledCustomSidebar = styled.div`${(props: StyledCustomSidebarProps) => {
   let root = "o-customSidebar";
   return css`

      width: 100%;
      height: 100vh;
      z-index: 2;
      padding: 10px ${props.isOpen ? '10px' : '20px'};
      border-right: 1px whitesmoke solid;
      
        
      .${root}_logo {
         margin: 30px auto;
         transition: all 0.3s ease-in-out;
         margin: ${props.isOpen && '30px 13px'};
      }

      .mantine-NavLink-root{
         margin-bottom: 8px;
         border-radius: 10px;
         height:  52px;
         /* display: flex !important;
         justify-content: center !important; */
      }
      
      .mantine-NavLink-icon {
         width: auto;
         margin-right: 12px;
      }

      a:not([data-active]) {
         color: rgba(0,0,2,0.6);
      }
      
      .mantine-NavLink-label, .mantine-NavLink-description {
         transition: all 0.3s ease-in-out;
         font-size:  16px !important;
         font-weight: 600;
         display: block;
         display: ${props.isOpen && 'none'};
         overflow: hidden;
      }
      .mantine-NavLink-description{
         font-size:  12px !important;
         font-weight: 600;
      }
      .${root}_divider {
         padding: 30px 0;
         font-weight: bold;
         cursor: context-menu;
         padding-left: 0;
         padding-left: ${props.isOpen || '15px'};
         
            span {
               font-size: 12px;
               color: rgba(0,0,2,0.7);
            }
      }
   `;
}}
`;

export default StyledCustomSidebar;
