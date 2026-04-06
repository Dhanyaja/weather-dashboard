const SunCycleCard = ({ data }) => {
  if (!data || data.length === 0) return null;

  const formatTime = (iso) => {
    const date = new Date(iso);
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const avgSunrise =
    data.reduce((sum, d) => sum + new Date(d.sunrise).getHours(), 0) /
    data.length;

  const avgSunset =
    data.reduce((sum, d) => sum + new Date(d.sunset).getHours(), 0) /
    data.length;

  return (
    <div className="card">
      <div className="card-title">Sun Cycle (IST)</div>

      <div className="flex justify-between mt-2">
        <div>
          <div className="text-textSecondary text-xs">Avg Sunrise</div>
          <div className="metric-value">{Math.floor(avgSunrise)}:00 AM</div>
        </div>

        <div>
          <div className="text-textSecondary text-xs">Avg Sunset</div>
          <div className="metric-value">{Math.floor(avgSunset)}:00 PM</div>
        </div>
      </div>
    </div>
  );
};

export default SunCycleCard;
