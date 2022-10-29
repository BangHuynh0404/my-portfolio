import React from "react";

import StylesCustomSidebar from "./styles";

export interface CustomSidebarProps {
  children?: React.ReactNode;
}

const CustomSidebar: React.FC<CustomSidebarProps> = ({ children }) => {
  //Some Logic
  return (
    <StylesCustomSidebar>
      {children}
    </StylesCustomSidebar>
  );
};

CustomSidebar.defaultProps = {
  children: undefined,
};

export default CustomSidebar;
