import React from "react";

import StylesCustomNavbar from "./styles";
import { Avatar, Image, Menu, Text } from "@mantine/core";

// import logo from "../../../assets/images/logo.svg";
// import { Link } from "react-router-dom";
import hamberger from "../../../assets/images/hamberger.svg";

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
      {
        /* <div className="o-customNavbar_leftMenu">
        <Link to="/">
          <Image src={logo} height={40} width={150} fit="contain" />
        </Link>
      </div> */
      }

      <div className="o-customNavbar_rightMenu">
        <Menu
          shadow="md"
          trigger="hover"
          width={200}
          offset={10}
          position="bottom-start"
        >
          <Menu.Target>
            <Avatar src="https://source.unsplash.com/random" />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Ứng dụng</Menu.Label>
            <Menu.Item>Cài đặt</Menu.Item>
            <Menu.Item>Lịch làm việc</Menu.Item>
            <Menu.Divider />

            <Menu.Label>Tài khỏan</Menu.Label>
            <Menu.Item>
              Cài đặt tài khoản
            </Menu.Item>,
            <Menu.Item color="red">
              Đăng xuất
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </StylesCustomNavbar>
  );
};

CustomNavbar.defaultProps = {
  children: undefined,
};

export default CustomNavbar;
