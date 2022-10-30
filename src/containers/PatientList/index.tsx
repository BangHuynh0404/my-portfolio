import React from "react";
import { Divider, Grid, Text } from "@mantine/core";
import { mockPatientsData } from "../../assets/mocks";
import CardPatient from "../../components/organisms/CardPatient";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PatientListContainerProps {}

const PatientListContainer: React.FC<PatientListContainerProps> = () => {
  console.log("Im in PatientList, Delete me!");
  return (
    <div className="p-PatientList">
      <h2>
        Danh sách các bệnh nhân
      </h2>
      <Divider my="sm" />
      <Grid>
        {mockPatientsData.map((item) => (
          <Grid.Col span={3} key={`${item.id}`}>
            <CardPatient
              address={item.address}
              age={item.age}
              gender={item.gender}
              fullName={item.fullName}
              phone={item.phone}
              status={item.status}
              email={item.email}
            />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default PatientListContainer;
