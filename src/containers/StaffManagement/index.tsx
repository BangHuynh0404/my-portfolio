import React, { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface StaffManagementContainerProps {}

const StaffManagementContainer: React.FC<StaffManagementContainerProps> =
  () => {
    return (
      <iframe
        src="https://staffmanage.netlify.app"
        title="Staffs Management"
      >
      </iframe>
    );
  };

export default StaffManagementContainer;
