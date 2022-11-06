import React from "react";

import StylesCustomNavbar from "./styles";
import { Avatar, Image, Menu, Text } from "@mantine/core";

import hamberger from "../../../assets/images/hamberger.svg";
import { IconBrandFacebook } from "@tabler/icons";
export interface CustomNavbarProps {
  children?: React.ReactNode;
  sidebarActive: boolean;
  toggleSidebar: () => void;
}

const CustomNavbar: React.FC<CustomNavbarProps> = (
  { children, toggleSidebar, sidebarActive },
) => {
  //Some Logic
  return (
    <StylesCustomNavbar
      sidebarActive={sidebarActive}
      className="o-customNavbar"
    >
      <div className="o-customNavbar_leftMenu">
        <Image
          style={{ cursor: "pointer" }}
          onClick={() => toggleSidebar()}
          src={hamberger}
          height={30}
          width={50}
          fit="contain"
        />
      </div>
      {/* <IconBrandFacebook size={24} color="green" /> */}

      <div className="o-customNavbar_rightMenu">
      </div>
    </StylesCustomNavbar>
  );
};

CustomNavbar.defaultProps = {
  children: undefined,
};

export default CustomNavbar;
