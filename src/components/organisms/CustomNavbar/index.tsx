import React from "react";

import StylesCustomNavbar from "./styles";
import { Avatar, Image, Menu, Text } from "@mantine/core";

import logo from "../../../assets/images/DC-logo-newslogan.webp";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
export interface CustomNavbarProps {
  children?: React.ReactNode;
}

const CustomNavbar: React.FC<CustomNavbarProps> = ({ children }) => {
  //Some Logic
  return (
    <StylesCustomNavbar className="o-customNavbar">
      <div className="o-customNavbar_leftMenu">
        <Link to="/">
          <Image src={logo} height={40} width={150} fit="contain" />
        </Link>
      </div>

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
