"use client"

import { useState, useEffect } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

interface MoodChartProps {
  data: {
    mood: string
    count: number
  }[]
  chartType?: "bar" | "pie"
}

const MOOD_COLORS = {
  "😊": "#4ade80", // green
  "🙂": "#60a5fa", // blue
  "😐": "#facc15", // yellow
  "🙁": "#fb923c", // orange
  "😢": "#f87171", // red
}

export default function MoodChart({ data, chartType = "bar" }: MoodChartProps) {
  const [chartData, setChartData] = useState(data)

  useEffect(() => {
    setChartData(data)
  }, [data])

  if (chartData.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
        <p className="text-gray-500">No data available</p>
      </div>
    )
  }

  if (chartType === "pie") {
    return (
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="count"
              nameKey="mood"
              label={({ mood, percent }) => `${mood} ${(percent * 100).toFixed(0)}%`}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={MOOD_COLORS[entry.mood as keyof typeof MOOD_COLORS] || "#8884d8"} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name, props) => [value, "Count"]}
              labelFormatter={(value) => `Mood: ${value}`}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mood" />
          <YAxis />
          <Tooltip formatter={(value) => [`${value} check-ins`, "Count"]} />
          <Legend />
          <Bar dataKey="count" name="Number of check-ins">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={MOOD_COLORS[entry.mood as keyof typeof MOOD_COLORS] || "#8884d8"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
