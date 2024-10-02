import useAuth from "./useAuth";

const useAdmin = () => {
  const { user } = useAuth();
  return (
    <div>
      <p> hello </p>
    </div>
  );
};

export default useAdmin;
