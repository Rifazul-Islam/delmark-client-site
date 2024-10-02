import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { FaArrowRight, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { LuEye, LuEyeOff } from "react-icons/lu";
import useAxiosPublice from "../../hooks/useAxiosPublice";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { createUser, udateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublice = useAxiosPublice();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);

    createUser(data.email, data.password).then((result) => {
      const user = result.user;

      udateUserProfile(data.name, data.photo)
        .then(() => {
          const users = {
            name: data?.name,
            email: data?.email,
          };
          axiosPublice.post("/users", users).then((res) => {
            if (res.data) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Profile Update SuccessFully",
                showConfirmButton: false,
                timer: 1500,
              });

              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="px-3">
      <Helmet>
        <title> delMark | SignUp </title>
      </Helmet>

      <div className="card bg-base-100 lg:w-1/2  w-full shadow-2xl   border-2 mx-auto my-5">
        <h3 className="text-center  pt-4 font-bold text-2xl ">
          Create Your Account
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          {/* Name Form  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              {...register("name", { required: true })}
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-600"> Name is Required </span>
            )}
          </div>
          {/* Photo URL Form  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              {...register("photo", { required: true })}
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-600"> Name is Required </span>
            )}
          </div>

          {/* Email Form  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="email"
              name="email"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-600"> Email is Required </span>
            )}
          </div>
          {/* Password Form  */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={isOpen ? "text" : "password"}
              name="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 10,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600" role="alert">
                Password is required
              </p>
            )}

            {errors.password?.type === "minLength" && (
              <p className="text-red-600" role="alert">
                Must be 6 charecter
              </p>
            )}

            {errors.password?.type === "pattern" && (
              <p className="text-red-600" role="alert">
                Must be one Capital and small letter and one number and expesal
                Symbol
              </p>
            )}

            {/* Show Eye Icons */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer absolute bottom-4 right-4 text-lg"
            >
              {isOpen ? (
                <>
                  <LuEyeOff />
                </>
              ) : (
                <>
                  <LuEye />
                </>
              )}
            </div>
          </div>

          <div className="form-control mt-6">
            <input
              className="btn bg-black hover:bg-gray-700 text-white text-md"
              type="submit"
              value="SignUp"
            />
            <p>
              <FaArrowRight className=" text-white text-md  -mt-8 ml-[286px]" />
            </p>
          </div>
        </form>

        {/* show SignUP System  */}
        <SocialLogin />

        <p className="p-2 mt-4 text-sm">
          Have an Account
          <Link className="text-blue-600 pl-1" to="/login">
            Go To Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
