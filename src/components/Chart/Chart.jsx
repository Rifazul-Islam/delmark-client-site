import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ThirdChat from "./ThirdChat";
import SecondChat from "./SecondChat";

const data = [
  {
    date: "2000-01",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: "2000-02",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: "2000-03",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: "2000-04",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: "2000-05",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: "2000-06",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    date: "2000-07",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    date: "2000-08",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: "2000-09",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: "2000-10",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: "2000-11",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: "2000-12",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const monthTickFormatter = (tick) => {
  const date = new Date(tick);

  return date.getMonth() + 1;
};

const renderQuarterTick = (tickProps) => {
  const { x, y, payload } = tickProps;
  const { value, offset } = payload;
  const date = new Date(value);
  const month = date.getMonth();
  const quarterNo = Math.floor(month / 3) + 1;
  const isMidMonth = month % 3 === 1;

  if (month % 3 === 1) {
    return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
  }

  const isLast = month === 11;

  if (month % 3 === 0 || isLast) {
    const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;

    return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
  }
  return null;
};
const Chart = () => {
  return (
    <div className="mt-10 mb-56">
      <h3 className="text-semibold text-xl py-5 text-gray-800">
        Session Duration By Users
      </h3>

      <div className="flex items-center pt-10 mx-auto">
        <div>
          <BarChart
            width={800}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={renderQuarterTick}
              height={1}
              scale="band"
              xAxisId="quarter"
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#20BB59" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>

      <h2 className="text-bold text-xl py-5 pt-14 text-gray-800">
        Revenue Duration
      </h2>
      <div className="flex justify-center items-center lg:flex-row flex-col mt-24">
        <div>
          <SecondChat />
        </div>
        <div className="mt-14 lg:mt-0">
          <ThirdChat />
        </div>
      </div>
    </div>
  );
};

export default Chart;
