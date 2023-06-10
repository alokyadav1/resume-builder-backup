import { useReducer, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "./Axios/axios";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Layout from "./components/pages/Layout";
import ChooseTemplate from "./components/pages/ChooseTemplate";
import Resume from "./components/pages/Resume.js";
import Template from "./components/templates/Template";
import UserContext from "./context/userData";
import UserReducer from "./reducers/user";
import ProfileReducer from "./reducers/profile";

function App() {
  const [user, dispatchUser] = useReducer(UserReducer, [])
  const [profile, dispatchProfile] = useReducer(ProfileReducer, {})

  useEffect(() => {
    const navigationEntries = window.performance.getEntriesByType('navigation');
    if (navigationEntries.length && navigationEntries[0].type === 'reload') {
      console.log("reloaded");
      const getUser = async () => {
        try {
          const res = await axios.get("/users/user", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          dispatchProfile({
            type: "SET_PROFILE",
            payload: { name: res.data.user.name, email: res.data.user.email }
          })
          localStorage.setItem("profile", JSON.stringify({ name: res.data.user.name, email: res.data.user.email }))
          localStorage.setItem("token", res.data.token)
        } catch (error) {
          console.log(error)
          dispatchProfile({
            type: "DELETE_PROFILE",
          })
          localStorage.removeItem("token")
          localStorage.removeItem("profile")
        }
      }
      getUser()
    }
  }, [])
  return (
    <UserContext.Provider value={{ user, dispatchUser, profile, dispatchProfile }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="create" element={<Resume />} />
            <Route path="choose-template" element={<ChooseTemplate />} />
            <Route path="create/1" element={<Template />} />
            <Route path="login" element={<SignUp />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;