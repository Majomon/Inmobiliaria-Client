import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Toaster } from "sonner";
import { loginUser } from "../redux/actions";

function Login() {
  const userData = useSelector((state) => state.userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputForm, setInputForm] = useState({
    email: "",
    password: "",
  });

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: inputForm.email,
      password: inputForm.password,
    };
    await dispatch(loginUser(data));
  };

  useEffect(() => {
    if (userData != null) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    }
  }, [userData, navigate]);

  return (
    <div className="w-full min-h-screen bg-gray-950 flex justify-center items-center">
      <Toaster position="top-center" />
      <form
        className="w-4/12 h-full p-10 bg-gray-500 rounded-lg flex flex-col gap-6"
        onSubmit={handlerSubmit}
      >
        <h1 className="pb-2 text-lg font-semibold">Login</h1>
        <div className="w-full h-full flex flex-col gap-4">
          <input
            type="text"
            name="email"
            value={inputForm.email}
            onChange={handlerChange}
            placeholder="Email"
            className="my-0 rounded-sm border-gray-800 border-2 "
          />
          <input
            type="text"
            name="password"
            value={inputForm.password}
            onChange={handlerChange}
            placeholder="Contraseña"
            className="my-0"
          />
        </div>
        <button className="p-2 bg-yellow-400 rounded-sm font-bold text-lg ">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
