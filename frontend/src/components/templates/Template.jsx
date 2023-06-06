import { useContext, useRef } from "react";
import UserContext from "../../context/userData";
import { useReactToPrint } from 'react-to-print';
import Template1 from "../templates/template_1/Template1";
import { redirect, useNavigate } from "react-router-dom";
function Template() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const componentRef = useRef();
    const handleDownload = useReactToPrint({
        content: () => componentRef.current,
    })
    // alert(user.length)
    if(user.length === 0){
        redirect("/")
    }
    return (
        <div className="my-3">
            {
                user.length === 0 && (navigate("/"))
            }
            {
                user.length > 0 && (
                    <div>
                        <div className='w-2/3 mx-auto bg-neutral-800 p-3 rounded-md shadow-2xl'>
                            <Template1 resumeInfo={user} ref={componentRef} />
                        </div>
                        <div className='flex justify-center w-full'>
                            <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={handleDownload}>Download</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Template;