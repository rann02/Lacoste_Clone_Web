import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logoutHandle = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="drawer-side my-20">
      <div className="bg-slate-200 h-30">
        <img
          src="https://i.pinimg.com/originals/70/67/e2/7067e2a36888b59fdc990c38980e066d.png"
          width={100}
          className="mx-auto"
        ></img>
      </div>
      <ul className="menu p-4 w-80 text-base-content">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/category">Category</Link>
        </li>
        <li>
          <Link to="/newAdmin">Register Admin</Link>
        </li>
        <li>
          <Link onClick={logoutHandle}>Sign Out</Link>
        </li>
      </ul>
    </div>
  );
}
