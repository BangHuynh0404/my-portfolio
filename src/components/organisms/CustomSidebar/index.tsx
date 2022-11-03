import { Divider, Image, NavLink, Text } from "@mantine/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import StylesCustomSidebar from "./styles";
import logo from "../../../assets/images/logo.svg";
import logoMini from "../../../assets/images/logo-mini.svg";
import {
  IconNotebook,
  IconSchool,
  IconSettings,
  IconSmartHome,
  IconUsers,
} from "@tabler/icons";
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
        label="Persional Info"
        description="Experiences, Education"
        component={Link}
        to={"/personal-info"}
        active={location.pathname === "/personal-info"}
        icon={<IconNotebook size={24} />}
        color="green"
        noWrap
      />

      <div className="o-customSidebar_divider">
        {isOpen ? <Divider sx={{ color: "green" }} /> : <span>TECHNICAL</span>}
      </div>

      <NavLink
        label="Tech Stacks"
        component={Link}
        to={"/tech"}
        active={location.pathname === "/tech"}
        icon={<IconSettings size={24} />}
        noWrap
        color="green"
      />

      <NavLink
        label="Learning"
        component={Link}
        description="Current Learning"
        to={"/learning"}
        active={location.pathname === "/learning"}
        icon={<IconSchool size={24} />}
        color="green"
        noWrap
      />
      <div className="o-customSidebar_divider">
        {isOpen ? <Divider sx={{ color: "green" }} /> : <span>PROJECTS</span>}
      </div>
      <NavLink
        label="Staffs Management"
        description="Small App with CRUD ops"
        component={Link}
        to={"/staff-man"}
        active={location.pathname === "/staff-man"}
        icon={<IconUsers size={24} />}
        color="green"
        noWrap
      />
    </StylesCustomSidebar>
  );
};

CustomSidebar.defaultProps = {
  isOpen: false,
};

export default CustomSidebar;
