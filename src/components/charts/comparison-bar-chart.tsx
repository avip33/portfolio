"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ComparisonItem {
  name: string;
  naive: number;
  actual: number;
}

interface ComparisonBarChartProps {
  data: ComparisonItem[];
  title?: string;
  description?: string;
}

const chartConfig = {
  naive: {
    label: "Naive Estimate",
    color: "var(--color-chart-1)",
  },
  actual: {
    label: "Actual Cost",
    color: "var(--color-chart-2)",
  },
} satisfies ChartConfig;

export function ComparisonBarChart({ data, title, description }: ComparisonBarChartProps) {
  return (
    <Card className="my-8">
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle className="text-sm">{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart data={data} layout="vertical" barGap={4}>
            <XAxis
              type="number"
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <YAxis
              type="category"
              dataKey="name"
              tickLine={false}
              axisLine={false}
              width={120}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) => (
                    <span className="font-mono">${Number(value).toLocaleString()}</span>
                  )}
                />
              }
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="naive" fill="var(--color-naive)" radius={4} />
            <Bar dataKey="actual" fill="var(--color-actual)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
