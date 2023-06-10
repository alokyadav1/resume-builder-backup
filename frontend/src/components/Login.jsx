import React, {useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/userData';
import axios from '../Axios/axios';
import "../assets/styles/signup.css"
function Login() {
    const navigate = useNavigate();
    const {dispatchProfile} = useContext(UserContext);
    const [message, setMessage] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const user={
            email,
            password
        }
        try {
            const res=await axios.post('/users/login',user);
            console.log(res);
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("profile", JSON.stringify({name:res.data.user.name, email:res.data.user.email}) )
            setMessage(res.data.message);
            dispatchProfile({
                type:"SET_PROFILE",
                payload:{name:res.data.user.name, email:res.data.user.email}
            })
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }
    return ( 
        <div>
            <form className="login space-y-6 mx-auto" onSubmit={handleSubmit}>
                        <div className='md:w-4/5 mx-auto'>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    onBlur={(e) => setEmail(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className='md:w-4/5 mx-auto'>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    onBlur={(e) => setPassword(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className='w-4/5 mx-auto'>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
        </div>
     );
}

export default Login;