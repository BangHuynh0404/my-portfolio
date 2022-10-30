import { NavLink, Text } from "@mantine/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import StylesCustomSidebar from "./styles";
import { Icon } from "@iconify/react";
export interface CustomSidebarProps {
  isOpen?: boolean;
}

const CustomSidebar: React.FC<CustomSidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  return (
    <StylesCustomSidebar className="o-customSidebar">
      <NavLink
        label="Danh sách bệnh nhân"
        component={Link}
        to={"/patients"}
        active={location.pathname === "/patients"}
        icon={
          <Icon
            icon="fluent-mdl2:health-solid"
            width="40"
            height="40"
            color="#014268"
          />
        }
      />
      <NavLink
        label="Danh sách các bác sĩ"
        component={Link}
        to={"/doctors"}
        active={location.pathname === "/doctors"}
        icon={
          <Icon
            icon="fluent-emoji-high-contrast:man-health-worker"
            width="40"
            height="40"
            color="#014268"
          />
        }
      />
      <NavLink
        childrenOffset={28}
        label={"Danh sách bệnh nhân"}
      >
        <NavLink
          label="First child link"
          component={Link}
          to={"/patients"}
          active={location.pathname === "/patients"}
          icon={<Icon icon="healthicons:health-worker" />}
        />
      </NavLink>
    </StylesCustomSidebar>
  );
};

CustomSidebar.defaultProps = {
  isOpen: false,
};

export default CustomSidebar;
