import * as Recharts from "recharts";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const { PieChart, Pie, Cell, ResponsiveContainer } = Recharts;

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const SecondChat = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const axiosSecure = useAxiosSecure();
  const { data: chatData = [] } = useQuery({
    queryKey: ["orders-stat"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orders-stats");
      return res.data;
    },
  });

  const pieChatData = chatData.map((data) => {
    return { name: data?.quantity, value: data?.revenue };
  });

  return (
    <div className="h-[200px] w-[500px]">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={pieChatData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChatData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Recharts.Legend></Recharts.Legend>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SecondChat;
