import { Divider } from '@mantine/core';
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { ChatBubbleProps } from ".";

interface StyledChatBubbleProps extends ChatBubbleProps {
   active: boolean
};

const StyledChatBubble = styled.div`${(props: StyledChatBubbleProps) => {
   let root = "o-chatBubble";
   return css`
      position: absolute;
      height: 100px;
      width: 100px;
      right: 10px;
      bottom:5px;   
      .glass-object {
         border-radius: 25px;
         backdrop-filter: blur(18px);
         padding: 2rem;
         box-shadow: 0 2px 10px rgb(0 0 0 / 10%), 0 10px 15px rgb(0 0 0 / 20%);
         box-sizing: border-box;
         background-image: linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.2));
         width: 100%;
         min-height: 70px;
         mix-blend-mode: hard-light;
      }
   `;
}}
`;

export default StyledChatBubble;
