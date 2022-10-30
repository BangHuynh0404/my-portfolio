import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import CustomNavbar from "../../components/organisms/CustomNavbar";
import CustomSidebar from "../../components/organisms/CustomSidebar";
import StyledMainLayout from "./styles";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MainLayoutContainerProps {}

const MainLayoutContainer: React.FC<MainLayoutContainerProps> = () => {
  return (
    <StyledMainLayout>
      <CustomNavbar />
      <main>
        <div className="c-mainLayout_sidebar">
          <CustomSidebar />
        </div>
        <div className="c-mainLayout_content">
          <Outlet />
        </div>
      </main>
    </StyledMainLayout>
  );
};

export default MainLayoutContainer;
