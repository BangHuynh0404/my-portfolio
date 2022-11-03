import { useToggle } from "@mantine/hooks";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import CustomNavbar from "../../components/organisms/CustomNavbar";
import CustomSidebar from "../../components/organisms/CustomSidebar";
import StyledMainLayout from "./styles";

interface MainLayoutContainerProps {}

const MainLayoutContainer: React.FC<MainLayoutContainerProps> = () => {
  const [sideActive, sideActiveToggle] = useToggle([true, false]);
  return (
    <StyledMainLayout sideActive={sideActive}>
      <div className="c-MainLayout_sidebar">
        <CustomSidebar isOpen={sideActive} />
      </div>

      <div className="c-MainLayout_main">
        <CustomNavbar
          sidebarActive={sideActive}
          toggleSidebar={sideActiveToggle}
        />
        <div className="c-MainLayout_content">
          <Outlet />
        </div>
      </div>
    </StyledMainLayout>
  );
};

export default MainLayoutContainer;
