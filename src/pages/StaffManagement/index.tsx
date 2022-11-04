import React from 'react';

import StylesStaffManagement from './styled';

import StaffManagementContainer from '../../containers/StaffManagement';

interface StaffManagementProps {}

const StaffManagementPage: React.FC<StaffManagementProps> = (props) => (
  <StylesStaffManagement className="p-staffManagement">
    <StaffManagementContainer {...props} />
  </StylesStaffManagement>
);

export default StaffManagementPage;
