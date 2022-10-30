import React from "react";
import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import StylesCardPatient from "./styles";
import { patientStatus } from "../../../utils/functions";
import { Link } from "react-router-dom";

export interface CardPatientProps {
  id?: number;
  fullName: string;
  img?: string;
  age: number;
  gender: string;
  address: string;
  phone: string;
  email?: string;
  status?: "normal" | "light" | "heavy";
}

const CardPatient: React.FC<CardPatientProps> = (
  {
    fullName,
    age,
    gender,
    address,
    phone,
    email,
    status,
  },
) => {
  //Some Logic
  return (
    <StylesCardPatient className="o-cardPatient">
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://source.unsplash.com/random"
            height={160}
            alt="Norway"
          />
        </Card.Section>
        <Badge color={`${patientStatus(status).colorStatus}`} variant="light">
          {patientStatus(status).messageStatus}
        </Badge>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{fullName || "Chưa nhập tên"}</Text>
        </Group>
        <Text size="sm" color="dimmed">
          Tuổi tác: {`${age}`} tuổi
        </Text>
        <Text size="sm" color="dimmed">
          Giới tính: {`${gender === "male" ? "Nam" : "Nữ"}`}
        </Text>
        <Text size="sm" color="dimmed">
          Địa chỉ: {`${address}`}
        </Text>
        <Text size="sm" color="dimmed">
          Số điện thoại: {`${phone}`}
        </Text>
        <Text size="sm" color="dimmed">
          Email: {`${email}`}
        </Text>

        <Link to={"/history-medical"} className="o-cardPatient_infoButton">
          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Đến lịch sử khám bệnh
          </Button>
        </Link>
      </Card>
    </StylesCardPatient>
  );
};

CardPatient.defaultProps = {};

export default CardPatient;
