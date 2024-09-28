import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const textCaptcha = useRef();
  const [disabled, setDisabled] = useState(true);

  const { loginUser } = useContext(AuthContext);

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
      console.log(user);
    });
  };

  const handlerValidateCaptcha = () => {
    const user_captcha_value = textCaptcha.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="text-center lg:w-1/2 w-full lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 lg:w-1/2  w-full shadow-2xl">
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

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Captucha  Area */}

            <div className="form-control">
              <label className="label top-0">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={textCaptcha}
                type="text"
                name="captcha"
                placeholder="write captcha"
                className="input input-bordered"
                required
              />
              <button
                onClick={handlerValidateCaptcha}
                className="mt-3 btn btn-outline btn-xs"
              >
                Valided
              </button>
            </div>

            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn btn-primary"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="p-2">
            New User
            <Link className="text-blue-600" to="/signUp">
              Go To SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
