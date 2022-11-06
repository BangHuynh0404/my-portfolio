import React from "react";
import IntroCard from "../../components/organisms/IntroCard";
import { Grid } from "@mantine/core";
import InfoCard, { InfoCardProps } from "../../components/organisms/InfoCard";
// import IntroSlider from "../../components/organisms/IntroSlider";
import { IconStar } from "@tabler/icons";
interface HomeContainerProps {}
const yearOfExp = {
  title: "Years of Experiences ",
  content: "",
  icon: <IconStar />,
};
const jobTitle = {
  title: "Job Title",
  content: "",
  icon: <IconStar />,
};
const HomeContainer: React.FC<HomeContainerProps> = () => {
  console.log("Im in Home, Delete me!");
  return (
    <Grid grow gutter={36}>
      <Grid.Col xl={12} lg={12}>
        <IntroCard />
      </Grid.Col>
      <Grid.Col xl={4} lg={6}>
        <InfoCard {...yearOfExp} />
      </Grid.Col>
      <Grid.Col xl={4} lg={6}>
        <InfoCard />
      </Grid.Col>
      <Grid.Col xl={4} lg={6}>
        <InfoCard />
      </Grid.Col>
    </Grid>
  );
};

export default HomeContainer;
