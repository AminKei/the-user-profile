"use client";
import { Card, Statistic, Row, Col, Progress } from "antd";

const Statistics = () => {
  return (
    <Card title="Statistics" className="mb-6">
      <Row gutter={16}>
        <Col span={8}>
          <Statistic title="Total Balance" value="$95,400" />
        </Col>
        <Col span={8}>
          <Statistic title="Budget" value="3,456" />
        </Col>
        <Col span={8}>
          <Statistic title="Calendar Events" value="63,867" />
        </Col>
      </Row>
      <Progress percent={75} status="active" className="mt-4" />
    </Card>
  );
};

export default Statistics;