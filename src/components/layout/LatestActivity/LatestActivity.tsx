"use client";
import { Card, Timeline } from "antd";

const LatestActivity = () => {
  return (
    <Card title="Latest Activity" className="p-4 bg-red-400 h-[340px]  w-full   ">
      <p className="text-right text-gray-500 mb-2">Just now</p>
      <Timeline>
        <Timeline.Item color="green">Kevin Gilbert created 3 new events in Calendar with Urgent Label.</Timeline.Item>
        <Timeline.Item color="red" >
          Meeting with UI/UX Team to manage our upcoming projects & task.
          <br /> Kevin Gilbert - 14 Nov, 2021, 9:30 PM to 10:00 PM
        </Timeline.Item>
        <Timeline.Item color="green" >
          Relik - Project UX Research & Plans
          <br /> Kevin Gilbert - 14 Nov, 2021, 9:30 PM to 11:00 PM
        </Timeline.Item>
        <Timeline.Item color="red" >
          Relik - Project Interview, User Flow and User Persona
          <br /> Kevin Gilbert
        </Timeline.Item>
      </Timeline>
    </Card>
  );
};

export default LatestActivity;