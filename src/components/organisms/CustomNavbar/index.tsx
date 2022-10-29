import React from 'react';

import StylesCustomNavbar from './styles';

export interface CustomNavbarProps {
  children?: React.ReactNode;
}

const CustomNavbar: React.FC<CustomNavbarProps> = ({ children }) => {
  //Some Logic
  return (
    <StylesCustomNavbar className="o-customNavbar">
      {children}
    </StylesCustomNavbar>
  )
};

CustomNavbar.defaultProps = {
  children: undefined,
};

export default CustomNavbar;

