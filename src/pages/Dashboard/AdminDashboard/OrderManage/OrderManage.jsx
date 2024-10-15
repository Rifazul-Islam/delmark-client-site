import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import moment from "moment";
import { toast } from "react-toastify";
const OrderManage = () => {
  const axiosSecure = useAxiosSecure();

  const { data: paymenteds = [], refetch } = useQuery({
    queryKey: ["pamentsed"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });

  const handleStatusChange = (id, itemValue) => {
    const updateInfo = {
      status: itemValue,
    };

    axiosSecure.patch(`/payments/${id}`, updateInfo).then((res) => {
      if (res.data) {
        toast.success("Status Update SuccessFully", { autoClose: 500 });
        refetch();
      }
    });
  };

  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold font-inter text-primary">
          Order Management
        </h2>
      </div>
      <div className="overflow-x-auto mb-20">
        <table className="table border mt-6">
          <thead className="rounded-lg">
            <tr className="text-lg bg-green-200 text-green-800 space-x-8 text-center">
              <th className="text-left">OrderId</th>
              <th className="text-left">Customer</th>
              <th className="text-left">Items</th>
              <th className="text-left">Total</th>
              <th className="text-left">Status</th>
              <th className="text-left">Date </th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {paymenteds?.map((item, index) => (
              <motion.tr
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={index % 2 === 0 ? "bg-green-50" : "bg-white"}
              >
                <td className="text-left"> #{index + 4506} </td>
                <td className="text-left">
                  {item ? (
                    <> {item?.email.slice(0, 6)} </>
                  ) : (
                    <> {item?.email} </>
                  )}
                </td>
                <td className="text-left"> Fish, Vagitables</td>
                <td className="text-left">${item?.price.toFixed(2)}</td>

                <td className="text-left">Pandding</td>
                <td className="text-left">
                  {moment(item?.date).format("DD-MM-YYYY")}
                </td>

                <td className=" py-4 whitespace-nowrap">
                  <select
                    defaultValue={item?.status}
                    onChange={(e) =>
                      handleStatusChange(item?._id, e.target.value)
                    }
                    className="mt-1 block  py-1.5 px-1  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManage;
