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
      bottom:5px ;    
   `;
}}
`;

export default StyledChatBubble;
