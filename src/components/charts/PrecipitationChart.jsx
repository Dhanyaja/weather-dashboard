import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PrecipitationChart = ({ data }) => {
  return (
    <div className="card min-w-[500px]">
      <div className="card-title mb-4">Precipitation (mm)</div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="date" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />

            <Bar dataKey="precipitation" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PrecipitationChart;
