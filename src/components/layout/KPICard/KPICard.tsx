import React from "react";
import { Card } from "antd";
import { CaretUpOutlined } from "@ant-design/icons";

export type KPIData = {
  id?: string;
  title?: string;
  value?: string | number;
  change?: number;
  color?: string;
};

type KPICardProps = {
  data?: KPIData;
};

const KPICard: React.FC<KPICardProps> = ({ data }) => {
  return (
    <Card>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: 14, color: "#555" }}>{data?.title}</div>
        <div style={{ fontSize: 12, color: "#999" }}>Today</div>
      </div>
      <div style={{ fontSize: 28, fontWeight: 700, marginTop: 8 }}>
        {data?.value}
      </div>
      <div
        style={{
          marginTop: 6,
          color: data?.color ?? "#52c41a",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CaretUpOutlined /> {data?.change ?? 0}%
      </div>
    </Card>
  );
};

export default KPICard;
