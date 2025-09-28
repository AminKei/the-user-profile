"use client";
import { Card, Row, Col, Typography } from "antd";
import React from "react";
const { Text } = Typography;

interface UserDatelistProps {
  fullName: string;
  profession: string;
  team: string;
  dob: string;
}
const UserDetails:React.FC<UserDatelistProps> = ({ fullName, profession, team, dob }) => {
  return (
    <Card title="User Details">
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Text strong>Full Name:</Text>{" "}
          <Text>{fullName || "Kevin Gilbert"}</Text>
        </Col>
        <Col span={12}>
          <Text strong>Profession:</Text>{" "}
          <Text>{profession || "UI/UX Lead Designer"}</Text>
        </Col>
        <Col span={12}>
          <Text strong>Team:</Text> <Text>{team || "UI/UX Designer"}</Text>
        </Col>
        <Col span={12}>
          <Text strong>Date of Birth:</Text>{" "}
          <Text>{dob || "25 Nov, 1983"}</Text>
        </Col>
      </Row>
    </Card>
  );
};

export default UserDetails;
