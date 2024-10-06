import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`payments/${user?.email}`);
      return res.data;
    },
  });

  //   console.log(payments);
  return (
    <div>
      <h2> Total Payment Lenght : {payments?.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-primary text-white text-lg">
            <tr>
              <th>#</th>
              <th> Price</th>
              <th> Transection Id </th>
              <th> Date </th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment, indx) => (
              <tr>
                <th> {indx + 1} </th>
                <td> {payment?.price} </td>
                <td> {payment?.transectionId}</td>
                <td className="text-blue-800"> 05-10-24</td>
                <td className="text-purple-500"> {payment?.status} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
