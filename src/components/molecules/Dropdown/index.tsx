import React from 'react';

import StylesDropdown from './styles';

export interface DropdownProps {
  children?: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  //Some Logic
  return (
    <StylesDropdown className="m-dropdown">
      {children}
    </StylesDropdown>
  )
};

Dropdown.defaultProps = {
  children: undefined,
};

export default Dropdown;

