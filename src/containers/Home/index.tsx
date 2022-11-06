import React from "react";
import IntroCard from "../../components/organisms/IntroCard";
import { Grid } from "@mantine/core";
// import IntroSlider from "../../components/organisms/IntroSlider";

interface HomeContainerProps {}

const HomeContainer: React.FC<HomeContainerProps> = () => {
  console.log("Im in Home, Delete me!");
  return (
    <Grid grow gutter={36}>
      <Grid.Col xl={12} lg={12}>
        <IntroCard />
      </Grid.Col>
      <Grid.Col xl={4} lg={10}>
      </Grid.Col>
      {
        /* <Grid.Col span={6}>
        <IntroCard />
      </Grid.Col> */
      }
    </Grid>
  );
};

export default HomeContainer;
