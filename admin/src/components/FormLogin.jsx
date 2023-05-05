import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/actionCreator";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function FormLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;

    setloginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await dispatch(login(loginData));
      localStorage.setItem("access_token", data.token);
      navigate("/");
      Swal.fire({
        position: "top-end",
        icon: "success",
        toast: true,
        title: "Welcome...",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Opss..`,
        text: `${error.message}`,
        toast: true,
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="p-10 w-1/3 flex flex-col gap-2 bg-blue-200 shadow-lg rounded-lg"
        onSubmit={handleLogin}
      >
        <span className="text-center font-semibold text-2xl">
          Log in to your account
        </span>
        <label for="email">Email</label>
        <input
          name="email"
          value={loginData.email}
          onChange={change}
          id="email"
          type="text"
          placeholder="email"
          className="input input-bordered input-info"
        />
        <label for="password">Password</label>
        <input
          name="password"
          value={loginData.password}
          onChange={change}
          id="password"
          type="password"
          placeholder="password"
          className="input input-bordered input-info"
        />
        <button className="btn btn-success w-24 self-center mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}
