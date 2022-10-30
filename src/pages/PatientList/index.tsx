import React from "react";
import PatientListContainer from "../../containers/PatientList";

import StylesPatientList from "./styled";

interface PatientListProps {}

const PatientListPage: React.FC<PatientListProps> = (props) => (
  <StylesPatientList className="p-patientList">
    <PatientListContainer {...props} />
  </StylesPatientList>
);

export default PatientListPage;
