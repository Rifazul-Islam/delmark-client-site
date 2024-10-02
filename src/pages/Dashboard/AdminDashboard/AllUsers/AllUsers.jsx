import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  //   console.log(users);
  //   /users/admin/:id
  //   handlerUpdateRole

  const handlerUpdateRole = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: " This admin covert !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user?._id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Succfully Admin Create!",
              text: "Your sucssfully Adming.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  //   handlerDeleteUser
  const handlerDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-center space-x-8 font-semibold">
        <h3 className="text-2xl">All Users : {users?.length} </h3>
        <h3 className="text-2xl">Total Users : {users?.length}</h3>
      </div>

      {/* table use  */}

      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-primary text-white ">
            <tr className="text-[16px]">
              <th></th>
              <th>Name</th>
              <th> Email</th>
              <th>Role</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user, id) => (
              <tr key={user?._id}>
                <th> {id + 1}</th>
                <td> {user?.name}</td>
                <td>{user?.email}</td>
                <td> {user?.role ? "Admin" : "User"}</td>
                <td>
                  <button
                    onClick={() => handlerUpdateRole(user)}
                    className="btn btn-ghost btn-lg text-orange-600 text-lg"
                  >
                    <FaEdit></FaEdit>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handlerDeleteUser(user._id)}
                    className="btn btn-ghost btn-lg text-red-700 text-lg"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
            ;
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
