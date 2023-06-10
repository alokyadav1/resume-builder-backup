import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import SignUpTab from '../SignUpTab';
import Login from '../Login';
import Register from '../Register';
import "../../assets/styles/signup.css"
function SignUp() {
    const tabs = ["Login", "Register"]
    const [activeTab, setActiveTab] = useState(0)
    const handleTabChange = (index) => {
        setActiveTab(index);
    }
    return (
        <>
            {
                localStorage.getItem("token") ? <Navigate to="/" /> : null
            }
            <div className='signup flex gap-2 justify-center' style={{ fontFamily: "San Francisco" }}>
                <div className='w-2/5 player-container'>
                    <Player
                        autoplay
                        loop
                        className='player'
                        src="https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json"

                    >
                    </Player>
                </div>
                <div className='signup-form w-2/5 mt-5'>
                    <SignUpTab
                        tabs={tabs}
                        activeTab={activeTab}
                        handleTabChange={handleTabChange} />
                    <div>
                        {
                            activeTab === 0 ? <Login /> : <Register />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;