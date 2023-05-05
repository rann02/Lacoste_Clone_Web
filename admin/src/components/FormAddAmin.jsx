import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../store/actions/actionCreator";
import Swal from "sweetalert2";

export default function FormAddAdmin() {
  const dispatch = useDispatch();
  const [newAdmin, setNewAdmin] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const changeRegister = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    setNewAdmin({
      ...newAdmin,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await dispatch(register(newAdmin));
      Swal.fire({
        position: "top-end",
        icon: "success",
        toast: true,
        title: "Account has been created",
        showConfirmButton: false,
        timer: 1500,
      });
      // console.log(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Opss..`,
        text: `${error.message}`,
        toast: true,
      });
      // console.log(error);
    }
  };

  console.log(newAdmin);

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        id="form_signin"
        className="p-5 flex flex-col gap-2 w-4/12"
        onSubmit={handleRegister}
      >
        <span>Add New Admin</span>
        <label>Username</label>
        <input
          name="username"
          onChange={changeRegister}
          value={newAdmin.username}
          id="username"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info"
        />
        <label for="email">Email</label>
        <input
          name="email"
          onChange={changeRegister}
          value={newAdmin.email}
          id="email"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info"
        />
        <label for="password">Password</label>
        <input
          name="password"
          onChange={changeRegister}
          value={newAdmin.password}
          id="password"
          type="password"
          placeholder="Type here"
          className="input input-bordered input-info"
        />
        <label for="phoneNumber">Phone Number</label>
        <input
          name="phoneNumber"
          onChange={changeRegister}
          value={newAdmin.phoneNumber}
          id="phoneNumber"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info"
        />
        <label for="address">Address</label>
        <input
          name="address"
          onChange={changeRegister}
          value={newAdmin.address}
          id="address"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info"
        />
        <div className="flex gap-5 justify-center">
          <button className="btn btn-success w-24">Submit</button>
          <Link to={"/"} className="btn btn-outline btn-warning">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
