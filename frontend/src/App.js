import { useReducer, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import ChooseTemplate from "./components/pages/ChooseTemplate";
import Resume from "./components/pages/Resume.js";
import Template from "./components/templates/Template";
import UserContext from "./context/userData";
import UserReducer from "./reducers/user";
function App() {
  const [user, dispatchUser] = useReducer(UserReducer, [])
  return (
    <UserContext.Provider value={{user,dispatchUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="create" element={<Resume />} />
            <Route path="choose-template" element={<ChooseTemplate />} />
            <Route path="create/1" element={<Template />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;