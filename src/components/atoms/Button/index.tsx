import React from 'react';

import StylesButton from './styles';

export interface ButtonProps {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  //Some Logic
  return (
    <StylesButton className="a-button">
      {children}
      jhagsudghu
    </StylesButton>
  )
};

Button.defaultProps = {
  children: undefined,
};

export default Button;

