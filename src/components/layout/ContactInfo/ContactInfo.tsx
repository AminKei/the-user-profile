"use client";
import { Card, Row, Col, Typography } from "antd";
const { Text } = Typography;

const ContactInfo = ({ email, phone, address }) => {
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
