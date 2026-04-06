import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TemperatureChart = ({ data }) => {
  return (
    <div className="card">
      <div className="card-title mb-4">Temperature</div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="temp"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TemperatureChart;
