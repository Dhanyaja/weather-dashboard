import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  unit,
  toggleUnit,
  selectedDate,
  setSelectedDate,
  minDate,
  maxDate,
  showControls = true,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-border">
      <div className="flex items-center gap-6">
        <div className="text-lg font-semibold">Weather Insight</div>

        <button
          onClick={() => navigate("/")}
          className="text-sm text-textSecondary cursor-pointer"
        >
          Dashboard
        </button>

        <button
          onClick={() => navigate("/historical")}
          className="text-sm text-textSecondary cursor-pointer"
        >
          Historical
        </button>
      </div>

      {showControls && (
        <div className="flex items-center gap-4">
          📅
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={minDate}
            maxDate={maxDate}
            dateFormat="MMM dd, yyyy"
            className="px-3 py-1 border border-border rounded-md text-sm bg-card text-white cursor-pointer"
          />
          <div className="flex gap-1 bg-card border border-border rounded-md p-1">
            <button
              onClick={() => unit !== "C" && toggleUnit()}
              className={`px-3 py-1 rounded text-sm transition ${unit === "C" ? "bg-primary text-white" : "text-textSecondary hover:text-white"}`}
            >
              °C
            </button>
            <button
              onClick={() => unit !== "F" && toggleUnit()}
              className={`px-3 py-1 rounded text-sm transition ${unit === "F" ? "bg-primary text-white" : "text-textSecondary hover:text-white"}`}
            >
              °F
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
