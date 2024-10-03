import { useForm } from "react-hook-form";
import SelectTitle from "../../../../components/SelectTitle";
import useAxiosPublice from "../../../../hooks/useAxiosPublice";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_Hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_Hosting_api = `https://api.imgbb.com/1/upload?key=${image_Hosting_key}`;
const AddItems = () => {
  const axiosPublice = useAxiosPublice();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };

    // console.log(imageFile);
    const res = await axiosPublice.post(image_Hosting_api, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });

    // console.log(res.data?.data?.display_url);

    if (res.data.success) {
      const productInfo = {
        name: data?.name,
        recipe: data.description,
        price: parseFloat(data?.price),
        category: data?.category,
        image: res.data?.data?.display_url,
        quantity: 0,
      };
      //   console.log(productInfo);

      const menuRes = await axiosSecure.post("/menu", productInfo);
      if (menuRes?.data?.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `New Product Create ${data?.name}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }

    // reset();
  };
  return (
    <div>
      <SelectTitle subTitle="What's New" title="Add An Item" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text"> Recipe Name*</span>
          </div>
          <input
            {...register("name")}
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full "
          />
        </label>
        <div className="flex justify-center items-center gap-3">
          {/* // Category Part  */}
          <label className="form-control w-full ">
            <label className="pb-1.5"> Category Selection*</label>
            <select
              defaultValue="default"
              {...register("category")}
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Seclect Cagetory Must be
              </option>
              <option value="salad">Salad</option>
              <option value="pizza"> Pizza</option>
              <option value="soup"> Soup</option>
              <option value="dessert"> Dessert</option>
              <option value="drinks"> Drinks</option>
            </select>
          </label>

          {/* // Pricing Part */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text"> Price*</span>
            </div>
            <input
              {...register("price")}
              type="text"
              placeholder="price"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        {/* // Products Description  */}
        <label className="form-control">
          <div className="label">
            <span className="label-text">Your bio</span>
          </div>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered h-24 mb-6"
            placeholder="Products Description"
          ></textarea>
        </label>
        {/* // File Upload */}
        <input
          type="file"
          {...register("image")}
          className="file-input w-full max-w-xs block "
        />
        <div className="py-6">
          <input
            className="bg-accent btn btn-sm  hover:bg-primary hover:text-white "
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddItems;
