"use client";
import { Card, List, Tag } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

// Fake task data
const tasks = [
  { id: 1, name: "Update Profile Picture", status: "Completed", dueDate: "2025-09-20" },
  { id: 2, name: "Review Dashboard Metrics", status: "In Progress", dueDate: "2025-09-25" },
  { id: 3, name: "Configure Security Settings", status: "Pending", dueDate: "2025-09-30" },
  { id: 4, name: "Update Notification Preferences", status: "Completed", dueDate: "2025-09-18" },
  { id: 5, name: "Team Meeting Setup", status: "In Progress", dueDate: "2025-09-22" },
];

const RecentTasks = () => {
  return (
    <Card title="Recent Tasks" className="h-[483px]">
      <List
        dataSource={tasks}
        renderItem={(item) => (
          <List.Item>
            <div className="flex justify-between w-full items-center">
              <div>
                <div className="text-sm font-medium text-gray-900">{item.name}</div>
                <div className="text-xs text-gray-500">
                  <ClockCircleOutlined className="mr-1" />
                  Due: {item.dueDate}
                </div>
              </div>
              <Tag
                color={
                  item.status === "Completed"
                    ? "green"
                    : item.status === "In Progress"
                    ? "blue"
                    : "orange"
                }
              >
                {item.status}
              </Tag>
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default RecentTasks;