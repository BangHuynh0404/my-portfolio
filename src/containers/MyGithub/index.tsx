import React from "react";
import { Badge, Button, Card, Grid, Group, Text } from "@mantine/core";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MyGithubContainerProps {}

const MyGithubContainer: React.FC<MyGithubContainerProps> = () => {
  const mockData = [
    {
      name: "Portfolio",
      desc: "This is What you are looking at. My personal CMS.",
      link: "https://github.com/BangHuynh0404/my-portfolio",
      tech: [
        {
          techName: "React JS",
          color: "blue",
        },
        {
          techName: "Redux-Toolkit",
          color: "pink",
        },
        {
          techName: "Emotion JS",
          color: "red",
        },
        {
          techName: "Mantine UI Library",
          color: "blue",
        },
      ],
    },
    {
      name: "Staff Management Application",
      desc:
        "Simple Application with CRUDs Operators. I made this project when I was a student with no experience just to show some basic skills. Enjoy!",
      link: "https://github.com/BangHuynh0404/Staff-Management-Project",
      tech: [
        {
          techName: "React JS",
          color: "blue",
        },
        {
          techName: "Redux",
          color: "pink",
        },
      ],
    },
  ];
  return (
    <main>
      <Grid gutter={36}>
        {mockData.map((item) => (
          <Grid.Col span={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{item.name}</Text>
              </Group>

              <Text size="sm" color="dimmed">
                {item.desc}
              </Text>
              <Group position="left" mt="md" mb="xs">
                {item.tech.map((itemTech) => (
                  <Badge color={itemTech.color} variant="light">
                    {itemTech.techName}
                  </Badge>
                ))}
              </Group>
              <a href={item.link} target="_blank" rel="noreferrer">
                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                >
                  Go to Repo
                </Button>
              </a>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </main>
  );
};

export default MyGithubContainer;
