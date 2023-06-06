import { Outlet, NavLink } from "react-router-dom";
import "./layout.css"
const Layout = () => {
  return (
    <>
      <nav className="bg-black text-white mx-auto w-full p-5 flex items-center ">
        <h2 className="text-2xl font-extrabold">RESUME MAKER</h2>
        <ul className="flex items-center gap-5 w-fit mx-auto">
          <li className=" cursor-pointer">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to="/create">Create Resume</NavLink>
          </li>
        </ul>
        <div className="flex gap-5">
          <NavLink to="/login" className="bg-blue-700 text-white rounded-full p-2 text-lg">Login</NavLink>
          <NavLink to="/login" className="bg-blue-700 text-white rounded-full p-2 text-lg">Register</NavLink>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout