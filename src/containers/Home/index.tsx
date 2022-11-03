import React from "react";
import IntroCard from "../../components/organisms/IntroCard";
import { Grid } from "@mantine/core";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeContainerProps {}

const HomeContainer: React.FC<HomeContainerProps> = () => {
  console.log("Im in Home, Delete me!");
  return (
    <Grid grow>
      <Grid.Col span={6}>
        <IntroCard />
      </Grid.Col>
      <Grid.Col span={3}>
        hihi
      </Grid.Col>
    </Grid>
  );
};

export default HomeContainer;
