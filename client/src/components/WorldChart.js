import React from "react";
import { useSelector } from "react-redux";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  CartesianGrid,
} from "recharts";

function WorldChart() {
  const worldChartState = useSelector((state) => state.showWorldChart);
  const worldApiState = useSelector((state) => state.worldApiData);

  console.log(worldApiState);
  return (
    <div>
      {worldChartState === true ? (
        worldApiState === null ? (
          <div className="text-center">Loading...</div>
        ) : (
          <ResponsiveContainer className="mx-3" width="95%" height={400}>
            <AreaChart data={worldApiState}>
              <defs>
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                  <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
                </linearGradient>
              </defs>

              <Area dataKey="infected" stroke="#2451B7" fill="url(#color)" />

              <XAxis dataKey="country" />

              <YAxis datakey="infected" />

              <CartesianGrid opacity={0.1} vertical={false} />
            </AreaChart>
          </ResponsiveContainer>
        )
      ) : null}
    </div>
  );
}

export default WorldChart;
