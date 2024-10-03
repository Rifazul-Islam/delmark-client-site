import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SelectTitle from "../../../../components/SelectTitle";
import useMenu from "../../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handlerUpdateProduct = () => {
    console.log("check");
  };

  const handlerDeleteitem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure
          .delete(`/menu/${item._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              // Supar Power Refetch use
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: `${item?.name} has been deleted.`,
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <SelectTitle subTitle="Hurry Up" title=" The Menage Item" />

      {/* // Table Use  */}

      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-primary text-white">
            <tr className="text-[18px] ">
              <th>#</th>
              <th>image</th>
              <th>Items Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu?.map((item, id) => (
              <tr key={item?._id}>
                <th> {id + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td> {item?.name}</td>
                <td>{item?.price}</td>

                <td>
                  <Link to={`/dashboard/updateItems/${item._id}`}>
                    <button className="btn btn-ghost btn-lg text-orange-600 text-lg">
                      <FaEdit></FaEdit>
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handlerDeleteitem(item)}
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

export default ManageItems;
