import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      reset();
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title> delMark | SignUp </title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="text-center lg:w-1/2 w-full lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 lg:w-1/2  w-full shadow-2xl">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
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
                  Must be one Capital and small letter and one number and
                  expesal Symbol
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="SignUp" />
            </div>
          </form>
          <p className="p-2">
            Have an Account
            <Link className="text-blue-600 pl-1" to="/login">
              Go To Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
