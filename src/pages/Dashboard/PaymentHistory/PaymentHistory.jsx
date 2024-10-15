import usePayments from "../../../hooks/usePayments";

const PaymentHistory = () => {
  const [payments, refetch] = usePayments();
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
