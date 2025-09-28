"use client";
import { useEffect, useRef } from "react";
import  Chart from "chart.js"; // ایمپورت Chart.js
const ActivityPieChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");
    if (ctx) {
      // Destroy existing chart if it exists
      const existingChart = Chart.getChart(ctx);
      if (existingChart) existingChart.destroy();

      new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Meetings", "Tasks", "Projects"],
          datasets: [
            {
              data: [30, 40, 30],
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Activity Distribution",
          },
        },
      });
    }
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <canvas ref={chartRef} style={{ height: "300px" }} />
    </div>
  );
};

export default ActivityPieChart;
