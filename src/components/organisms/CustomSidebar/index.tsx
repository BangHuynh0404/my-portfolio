import { Divider, Image, NavLink, Text } from "@mantine/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import StylesCustomSidebar from "./styles";
import logo from "../../../assets/images/logo.svg";
import logoMini from "../../../assets/images/logo-mini.svg";
import { IconSmartHome, IconUsers } from "@tabler/icons";
export interface CustomSidebarProps {
  isOpen?: boolean;
}

const CustomSidebar: React.FC<CustomSidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  return (
    <StylesCustomSidebar className="o-customSidebar" isOpen={isOpen}>
      <Image
        className="o-customSidebar_logo"
        src={isOpen ? logoMini : logo}
        height={40}
        width={150}
        fit="contain"
      />

      <div className="o-customSidebar_divider">
        {isOpen ? <Divider sx={{ color: "green" }} /> : <span>GENERAL</span>}
      </div>

      <NavLink
        label="Home"
        component={Link}
        to={"/"}
        active={location.pathname === "/"}
        color="green"
        icon={<IconSmartHome size={24} />}
      />
      <NavLink
        label="Employees List"
        component={Link}
        to={"/doctors"}
        active={location.pathname === "/doctors"}
        icon={<IconUsers size={24} />}
        noWrap
      />
      <NavLink
        label="Employees List"
        component={Link}
        to={"/doctors"}
        active={location.pathname === "/doctors"}
        icon={<IconUsers size={24} />}
        noWrap
      >
        <NavLink
          label="Employees List"
          component={Link}
          to={"/doctors"}
          active={location.pathname === "/doctors"}
          icon={<IconUsers size={24} />}
          noWrap
        />
      </NavLink>
    </StylesCustomSidebar>
  );
};

CustomSidebar.defaultProps = {
  isOpen: false,
};

export default CustomSidebar;
