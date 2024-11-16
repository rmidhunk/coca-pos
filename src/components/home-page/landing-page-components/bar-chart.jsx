import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { db } from "@/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  salesStatistics: {
    label: "Sales Statistics",
    color: "hsl(var(--chart-1))",
  },
};

export function BarChartComponent() {
  const [chartData, setChartData] = useState([]);

  const getChartData = async () => {
    const querySnapshot = await getDocs(
      query(collection(db, "chartdata"), orderBy("order", "asc")),
    );
    const newChartData = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const exists = chartData.some((item) => item.id === data.id);
      if (!exists) {
        newChartData.push({ id: doc.id, ...data });
      }
    });
    setChartData(newChartData);
  };

  useEffect(() => {
    getChartData();
  }, []);

  return (
    <Card className="bg-background-blue shadow-none">
      <CardHeader>
        <div className="flex items-center gap-2 py-2 px-3 w-max bg-white rounded-full">
          <div className="size-6">
            <img src="/sales-graph-icon.svg" alt="Sales Graph" />
          </div>
          <span className="font-medium text-sm text-background-black">
            Sales Statistics
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis axisLine={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="salesStatistics"
              fill="#8FBFFF"
              barSize={8}
              radius={8}
              activeBar={{
                fill: "#4E9AFF",
                stroke: "#4E9AFF33",
                strokeWidth: 3,
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
