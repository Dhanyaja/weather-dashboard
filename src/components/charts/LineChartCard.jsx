import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Brush,
} from "recharts";

const LineChartCard = ({ title, data, dataKey, color }) => {
  return (
    <div className="card min-w-[280px] bg-card rounded-xl">
      <div className="card-title mb-4">{title}</div>

      <div className="h-48">
        {data && data.length > 0 && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#020617",
                  border: "1px solid #1e293b",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#94a3b8" }}
              />

              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                isAnimationActive={true}
                animationDuration={800}
              />

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
        )}
      </div>
    </div>
  );
};

export default LineChartCard;
