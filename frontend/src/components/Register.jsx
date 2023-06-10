import React , {useContext, useState} from 'react';
import axios from '../Axios/axios';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/userData';
function Register() {
    const navigate = useNavigate();

    const {dispatchProfile} = useContext(UserContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const user={
            name,
            email,
            password
        }
        try {
            const res=await axios.post('/users/register',user);
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
            <form className="space-y-6 mx-auto" onSubmit={handleSubmit}>
                <div className='md:w-4/5 mx-auto'>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                    </label>
                    <div className="mt-2">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            onBlur={(e) => setName(e.target.value)}
                            required
                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
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
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Register
                    </button>
                    <p>{message}</p>
                </div>
            </form>
        </div>
    );
}

export default Register;