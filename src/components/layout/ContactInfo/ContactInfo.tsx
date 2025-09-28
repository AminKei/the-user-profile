"use client";
import { Card, Row, Col, Typography } from "antd";
import React from "react";
const { Text } = Typography;

interface ContaentProps {
  email: string;
  phone: string;
  address: string;
}

const ContactInfo: React.FC<ContaentProps> = ({ email, phone }) => {
  return (
    <Card title="Info">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Text>Email: {email || "info@kevin.com"}</Text>
        </Col>
        <Col span={24}>
          <Text>Phone: {phone || "+1-202-555-0151"}</Text>
        </Col>
      </Row>
    </Card>
  );
};

export default ContactInfo;
