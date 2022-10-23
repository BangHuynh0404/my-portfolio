import React from 'react';

import StylesMyTable from './styles';

export interface MyTableProps {
  children?: React.ReactNode;
}

const MyTable: React.FC<MyTableProps> = ({ children }) => {
  //Some Logic
  return (
    <StylesMyTable className="m-myTable">
      {children}
    </StylesMyTable>
  )
};

MyTable.defaultProps = {
  children: undefined,
};

export default MyTable;

