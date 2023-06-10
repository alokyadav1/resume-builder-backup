import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import ProfileList from "../ProfileList";
import "./layout.css"
const Layout = () => {
  return (
    <>
      <nav className="bg-black text-white mx-auto w-full p-5 flex gap-2  items-center flex-wrap justify-center">
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
          {
            !localStorage.getItem("token") ? (
              <NavLink to="/login" className="bg-blue-700 text-white rounded-full text-sm p-2 cursor-pointer">Sign Up</NavLink>
            ) : (
              <ProfileList />
            )
          }
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout