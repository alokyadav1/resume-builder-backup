import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import UserContext from "../context/userData";
import "../assets/styles/profileList.css"
function Profile() {
    const navigate = useNavigate();
    const { dispatchProfile } = useContext(UserContext)
    const profile = JSON.parse(localStorage.getItem("profile"))
    const [toggleProfile, setToggleProfile] = useState(false)
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("profile")
        dispatchProfile({
            type: "DELETE_PROFILE"
        })
        navigate("/")
    }

    const handleToggle = () => {
        setToggleProfile(!toggleProfile)
    }
    return (
        <div>
            <div className="flex gap-x-2 items-center">
                <div className="relative">
                    <div className="flex items-center justify-center bg-orange-500 w-10 h-10 rounded-full font-bold cursor-pointer shadow-2xl" onClick={handleToggle}>
                        {
                            profile.name.charAt(0).toUpperCase()
                        }
                    </div>
                    {
                        toggleProfile && <div className="container mt-2 absolute right-0 w-fit rounded-lg shadow-2xl z-10">
                            <div className="list container-body px-2 py-1 rounded-md">
                                <ul className="mb-2 text-white font-bold">
                                    <li className="text-sm hover:text-blue-600">{profile.name}</li>
                                    <li className="text-sm hover:text-blue-600">{profile.email}</li>
                                </ul>
                                <hr />
                                <button
                                    onClick={handleLogout}
                                    className=" bg-blue-600 text-white py-1 px-2 mx-auto rounded-full text-xs cursor-pointer my-2">Logout</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Profile;