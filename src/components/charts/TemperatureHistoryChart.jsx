import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Brush,
} from "recharts";

const TemperatureHistoryChart = ({ data }) => {
  return (
    <div className="card min-w-[500px]">
      <div className="card-title mb-4">Temperature Trends (°C)</div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#020617",
                border: "1px solid #1e293b",
                borderRadius: "8px",
              }}
            />
            <Legend />

            <Line dataKey="min" stroke="#38bdf8" name="Min" strokeWidth={2} />
            <Line dataKey="mean" stroke="#3b82f6" name="Mean" strokeWidth={2} />
            <Line dataKey="max" stroke="#ef4444" name="Max" strokeWidth={2} />

            <Brush
              dataKey="time"
              height={8}
              stroke="#3b82f6"
              travellerWidth={8}
              fill="#020617"
              strokeOpacity={0.3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TemperatureHistoryChart;
