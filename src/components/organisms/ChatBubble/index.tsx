import { useToggle } from "@mantine/hooks";
import React from "react";
import Lottie from "react-lottie-player";
import chatIcon from "../../../assets/json/chat-bubble.json";
import StylesChatBubble from "./styles";
import { IconBrandFacebook, IconMailFast } from "@tabler/icons";
import { Modal } from "@mantine/core";
export interface ChatBubbleProps {}

const ChatBubble: React.FC<ChatBubbleProps> = () => {
  const [active, setActive] = useToggle([false, true]);
  console.log(active);

  return (
    <StylesChatBubble
      active={active}
      className="o-chatBubble"
      onClick={() => setActive()}
    >
      <Lottie
        loop
        animationData={chatIcon}
        play
      />
      <Modal
        opened={active}
        onClose={() => {
          setActive();
        }}
        closeOnClickOutside
      >
        <IconBrandFacebook size={48} color="blue" />
      </Modal>
    </StylesChatBubble>
  );
};

ChatBubble.defaultProps = {};

export default ChatBubble;
