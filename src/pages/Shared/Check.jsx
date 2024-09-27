import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
const Check = () => {
  return (
    <Flicking
      circular={true}
      autoPlay={true}
      autoPlayInterval={2000} // interval in milliseconds
      infinite={true}
      align="center"
      renderOnlyVisible={true}
      inputType={["touch", "mouse"]}
    >
      <div className="panel">
        <img src="https://i.ibb.co.com/frMm1L9/banner1.jpg" alt="" />
      </div>
      <div className="panel">
        <img src="https://i.ibb.co.com/frMm1L9/banner1.jpg" alt="" />
      </div>
      <div className="panel">
        <img src="https://i.ibb.co.com/frMm1L9/banner1.jpg" alt="" />
      </div>
    </Flicking>
  );
};

export default Check;

// import { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   Menu,
//   ShoppingCart,
//   Users,
//   DollarSign,
//   Package,
//   Bell,
//   ChevronDown,
//   Search,
// } from "lucide-react";

// const data = [
//   { name: "Jan", sales: 4000 },
//   { name: "Feb", sales: 3000 },
//   { name: "Mar", sales: 5000 },
//   { name: "Apr", sales: 4500 },
//   { name: "May", sales: 6000 },
//   { name: "Jun", sales: 5500 },
// ];

// const Check = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside
//         className={`${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
//       >
//         <div className="flex items-center justify-center h-20 border-b">
//           <span className="text-2xl font-semibold text-gray-800">E-Shop</span>
//         </div>
//         <nav className="mt-5">
//           <a
//             className="flex items-center px-6 py-2 text-gray-700 bg-gray-200"
//             href="#"
//           >
//             <ShoppingCart className="w-5 h-5 mr-3" />
//             Dashboard
//           </a>
//           <a
//             className="flex items-center px-6 py-2 mt-2 text-gray-600 hover:bg-gray-200"
//             href="#"
//           >
//             <Package className="w-5 h-5 mr-3" />
//             Products
//           </a>
//           <a
//             className="flex items-center px-6 py-2 mt-2 text-gray-600 hover:bg-gray-200"
//             href="#"
//           >
//             <Users className="w-5 h-5 mr-3" />
//             Customers
//           </a>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Top bar */}
//         <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
//           <div className="flex items-center">
//             <button
//               onClick={() => setSidebarOpen(!sidebarOpen)}
//               className="text-gray-500 focus:outline-none lg:hidden"
//             >
//               <Menu className="w-6 h-6" />
//             </button>
//             <div className="relative mx-4 lg:mx-0">
//               <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
//                 <Search className="w-5 h-5 text-gray-500" />
//               </span>
//               <input
//                 className="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600"
//                 type="text"
//                 placeholder="Search"
//               />
//             </div>
//           </div>
//           <div className="flex items-center">
//             <button className="flex mx-4 text-gray-600 focus:outline-none">
//               <Bell className="w-6 h-6" />
//               <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
//             </button>
//             <div className="relative">
//               <button className="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
//                 <img
//                   className="object-cover w-full h-full"
//                   src="/placeholder.svg?height=32&width=32"
//                   alt="Your avatar"
//                 />
//               </button>
//               <div className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
//                 >
//                   Profile
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
//                 >
//                   Settings
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
//                 >
//                   Logout
//                 </a>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
//           <div className="container mx-auto px-6 py-8">
//             <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>
//             <div className="mt-8">
//               <div className="flex flex-wrap -mx-6">
//                 <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
//                   <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
//                     <div className="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
//                       <DollarSign className="w-8 h-8 text-white" />
//                     </div>
//                     <div className="mx-5">
//                       <h4 className="text-2xl font-semibold text-gray-700">
//                         $30,000
//                       </h4>
//                       <div className="text-gray-500">Revenue</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
//                   <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
//                     <div className="p-3 bg-green-600 bg-opacity-75 rounded-full">
//                       <ShoppingCart className="w-8 h-8 text-white" />
//                     </div>
//                     <div className="mx-5">
//                       <h4 className="text-2xl font-semibold text-gray-700">
//                         200
//                       </h4>
//                       <div className="text-gray-500">Total Orders</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
//                   <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
//                     <div className="p-3 bg-pink-600 bg-opacity-75 rounded-full">
//                       <Users className="w-8 h-8 text-white" />
//                     </div>
//                     <div className="mx-5">
//                       <h4 className="text-2xl font-semibold text-gray-700">
//                         50,000
//                       </h4>
//                       <div className="text-gray-500">Total Users</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-8">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-lg font-medium text-gray-700">
//                   Sales Overview
//                 </h3>
//                 <div className="flex items-center">
//                   <span className="text-sm text-gray-600">Sort By:</span>
//                   <select className="mx-2 text-sm text-gray-600 focus:outline-none border rounded-md">
//                     <option>Monthly</option>
//                     <option>Yearly</option>
//                   </select>
//                   <button className="text-gray-600 focus:outline-none">
//                     <ChevronDown className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//               <div className="mt-4">
//                 <div className="h-64">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart data={data}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <Tooltip />
//                       <Legend />
//                       <Bar dataKey="sales" fill="#8884d8" />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-8">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-lg font-medium text-gray-700">
//                   Recent Orders
//                 </h3>
//                 <button className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none">
//                   View All
//                 </button>
//               </div>
//               <div className="mt-4">
//                 <div className="overflow-hidden bg-white shadow-sm rounded-lg">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
//                           Order ID
//                         </th>
//                         <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
//                           Customer
//                         </th>
//                         <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
//                           Status
//                         </th>
//                         <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
//                           Total
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       <tr>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm font-medium text-gray-900">
//                             #10001
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-900">John Doe</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                             Completed
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           $100.00
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm font-medium text-gray-900">
//                             #10002
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-900">
//                             Jane Smith
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
//                             Pending
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           $75.50
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Check;
