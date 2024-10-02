import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublice from "../../hooks/useAxiosPublice";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublice = useAxiosPublice();
  const navigate = useNavigate();
  const handlerGoogle = () => {
    googleLogin().then((result) => {
      const userInfo = {
        name: result?.user?.displayName,
        email: result?.user?.email,
      };
      axiosPublice.post("/users", userInfo).then((res) => {
        console.log(res.data);
      });

      console.log(result?.user);
      navigate("/");
    });
  };
  return (
    <div>
      <div className="divider">OR Continue With </div>
      <div className="grid gap-4 grid-cols-1 my-4 md:grid-cols-2 lg:grid-cols-2 px-3">
        <div
          onClick={handlerGoogle}
          className="flex justify-center p-4 items-center border-[1px] border-gray-400  gap-2 shadow-lg cursor-pointer rounded-lg"
        >
          <button>
            <FaGoogle className="text-2xl font-bold" />
          </button>
          <p> Sign Up With Google</p>
        </div>

        <div className="flex justify-center p-4 items-center cursor-pointer border-[1px] border-gray-400 gap-2 shadow-lg rounded-lg">
          <p>
            <FaGithub className="text-2xl font-bold" />
          </p>
          <p> Sign Up With Github</p>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
