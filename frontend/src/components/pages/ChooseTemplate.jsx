import { useContext } from "react";
import UserContext from "../../context/userData";
import { NavLink } from "react-router-dom";
import Template1 from "../../assets/templates/template1.png"
function ChooseTemplate() {
    const {user} = useContext(UserContext);
    return ( 
        <div>
            <h1 className=" text-3xl my-3 font-bold text-center">Choose Template</h1>
            <div className="templates">
                <ul className="flex flex-wrap justify-left gap-2 mx-5">
                    <li className="bg-red-500 w-fit border-8 rounded-md">
                        <NavLink to="/create/1">
                            <img src={Template1} alt="template 1" width={200} height={300}/>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default ChooseTemplate;