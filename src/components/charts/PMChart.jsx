import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Brush,
} from "recharts";

const PMChart = ({ data }) => {
  return (
    <div className="card min-w-[280px] bg-card rounded-xl">
      <div className="card-title mb-4">PM10 & PM2.5 (µg/m³)</div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="pm10"
              stroke="#f97316"
              strokeWidth={2}
              name="PM10"
            />
            <Line
              type="monotone"
              dataKey="pm25"
              stroke="#ef4444"
              strokeWidth={2}
              name="PM2.5"
            />
            <Brush
              dataKey="time"
              height={8}
              stroke="#3b82f6"
              travellerWidth={8}
              fill="#020617"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PMChart;
