import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { FaArrowRight, FaGithub, FaGoogle } from "react-icons/fa";
import { LuEye, LuEyeOff } from "react-icons/lu";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { loginUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const loginHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const result = { email, password };

    loginUser(email, password).then((result) => {
      const user = result.user;

      Swal.fire({
        title: "User Login Successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });

      navigate(from, { replace: true });
    });
  };

  const handlerValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="flex justify-center  my-4 px-3">
      <Helmet>
        <title> delMark | Login </title>
      </Helmet>

      <div className="card bg-base-100 border-2 lg:w-1/2  w-full shadow-2xl">
        <h1 className="text-3xl font-bold text-center mt-2">Login now!</h1>
        <form onSubmit={loginHandler} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={isOpen ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className=" flex justify-end ">
              <a
                href="#"
                className="pt-1 text-sm text-black font-semibold link link-hover"
              >
                Forgot password?
              </a>
            </label>

            {/* LuEye Show  */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer absolute bottom-10 right-4 text-lg"
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

          {/* Captucha  Area */}

          <div className="form-control">
            <label className="label top-0 ">
              <LoadCanvasTemplate />
            </label>
            <input
              onBlur={handlerValidateCaptcha}
              type="text"
              name="captcha"
              placeholder="write captcha"
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-6">
            {/* // DoTo :  disabled={disabled} */}
            <input
              className="btn text-md bg-black text-white hover:bg-gray-700"
              type="submit"
              value="Login"
            />
            <p>
              <FaArrowRight className=" text-white text-md  -mt-8 ml-[286px]" />
            </p>
          </div>
        </form>

        {/* show Login System  */}
        <SocialLogin />

        <p className="p-2 text-sm">
          New User
          <Link className="text-blue-600 pl-1" to="/signUp">
            Go To SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
