import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Chart from "../../../components/Chart/Chart";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import SecondChat from "../../../components/Chart/SecondChat";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const AdminDashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  // Chats Data

  const { data: chatData = [] } = useQuery({
    queryKey: ["orders-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orders-stats");
      return res.data;
    },
  });

  const summaryCards = [
    { label: "Total Customers", value: stats?.customers },
    { label: "Total Orders", value: stats?.orders },
    { label: "Revenue", value: stats?.revenue },
    { label: "Total Product", value: stats?.menuItems },
  ];
  return (
    <div>
      <div className="flex justify-between items-center pb-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800"
        >
          <h2>
            Hi, Welcome Admin {user?.displayName ? user?.displayName : "back"}
          </h2>
        </motion.div>

        <div className="flex text-2xl font-bold pr-4 gap-3 items-center">
          <p className="animate-spin text-[#CD5ABF] duration-300">
            <IoSettings />
          </p>
          <p className=" text-blue-500 duration-300">
            <IoMdNotifications />
          </p>
          <p className=" text-primary duration-300">
            <MdEmail />
          </p>
        </div>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6 mb-6">
        {summaryCards.map((card, index) => (
          <div
            key={index}
            className="border-[1px] p-5 shadow-lg rounded-lg transition-transform duration-300 bg-[#FFFFFF]  hover:scale-105 cursor-pointer"
          >
            {/* bg-white border rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 */}
            <div className="flex flex-row items-center justify-between space-y-0 pb-2  ">
              <div className="text-sm font-medium">{card.label}</div>
              <div className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <div className="text-2xl font-bold">{parseInt(card.value)}</div>
            </div>
          </div>
        ))}
      </div>

      {/* grapChat Aria */}
      <div>
        <Chart />
      </div>

      {/* // Chats use from Jhukhar Vai */}
      <div className="flex ">
        <div className="w-1/2">
          <BarChart
            width={1000}
            height={300}
            data={chatData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chatData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import { FaUsers, FaChartBar, FaShoppingCart, FaBell } from "react-icons/fa";
// import { AiFillDashboard, AiFillSetting } from "react-icons/ai";
// import { BiMessageSquareDetail } from "react-icons/bi";
// import { MdEmail } from "react-icons/md";

// const menuItems = [
//   { icon: AiFillDashboard, label: "Dashboard" },
//   { icon: FaUsers, label: "Users" },
//   { icon: FaChartBar, label: "Analytics" },
//   { icon: FaShoppingCart, label: "Orders" },
//   { icon: BiMessageSquareDetail, label: "Messages" },
//   { icon: AiFillSetting, label: "Settings" },
// ];

// const stats = [
//   { icon: FaUsers, label: "Total Users", value: "1,234" },
//   { icon: FaShoppingCart, label: "Total Orders", value: "456" },
//   { icon: MdEmail, label: "Unread Messages", value: "23" },
//   { icon: FaBell, label: "Notifications", value: "7" },
// ];
// const AdminDashboard = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       {/* Animated Sidebar */}
//       <motion.aside
//         initial={{ width: 0 }}
//         animate={{ width: isOpen ? 250 : 60 }}
//         className={`bg-white shadow-md overflow-hidden ${
//           isOpen ? "p-4" : "p-2"
//         }`}
//       >
//         <motion.div
//           animate={{ opacity: isOpen ? 1 : 0 }}
//           transition={{ duration: 0.2 }}
//         >
//           <h1 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
//             <AiFillDashboard className="mr-2" />
//             Dashboard
//           </h1>
//         </motion.div>
//         <nav className="mt-4">
//           {menuItems.map((item, index) => (
//             <motion.a
//               key={index}
//               href="#"
//               className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md mb-2"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <item.icon className="w-5 h-5 mr-2" />
//               <AnimatePresence>
//                 {isOpen && (
//                   <motion.span
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     {item.label}
//                   </motion.span>
//                 )}
//               </AnimatePresence>
//             </motion.a>
//           ))}
//         </nav>
//       </motion.aside>

//       {/* Main content */}
//       <main className="flex-1 p-8">
//         <div className="flex justify-between items-center mb-6">
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-3xl font-semibold text-gray-800"
//           >
//             Welcome Back, Admin
//           </motion.h2>
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="flex space-x-2"
//           >
//             <button
//               variant="outline"
//               size="icon"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               <AiFillDashboard className="h-5 w-5" />
//             </button>
//             <button variant="outline" size="icon">
//               <FaBell className="h-5 w-5" />
//             </button>
//             <button variant="outline" size="icon">
//               <MdEmail className="h-5 w-5" />
//             </button>
//           </motion.div>
//         </div>

//         {/* Stats */}
//         <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <div className="border-2">
//                 <div className="flex flex-row items-center justify-between space-y-0 pb-2">
//                   <div className="text-sm font-medium">{stat.label}</div>
//                   <stat.icon className="h-4 w-4 text-muted-foreground" />
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold">{stat.value}</div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Additional content */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//         >
//           <div>
//             <div>
//               <div className="flex items-center">
//                 <FaChartBar className="mr-2" />
//                 Recent Activity
//               </div>
//             </div>
//             <div>
//               <p>
//                 Here you can display charts, tables, or any other dashboard
//                 content.
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;
