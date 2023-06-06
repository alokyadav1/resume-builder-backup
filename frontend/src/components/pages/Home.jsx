import React from 'react';
import { NavLink } from "react-router-dom";
import "../../assets/styles/home.css"
function Home() {
    return (
        <div className="home bg-slate-100 w-full text-center p-5 h-full">
            <div className=''>
                <h2 className='text-6xl font-bold leading-tight px-10'>Make an outstanding <span className='resume'>resume</span> for free in minutes.</h2>
                <p className=''>Showcase yourself and your achievements with an impressive resume made with the free online resume maker.</p>
            </div>
            <div className='w-fit flex justify-center items-center p-10'>
                <div className='w-3/4'>
                    <NavLink to="/create" className="bg-blue-700 text-white rounded-full p-5 text-lg">Create yout resume now <span className='arrow'>→</span></NavLink>
                </div>
                <div className="marquee w-1/4">
                    <div className="marquee__inner text-slate-800 text-sm" aria-hidden="true">
                        <marquee behavior="scroll" direction="left">
                            <ul className='inline flex gap-10 list-disc'>
                                <li>Free</li>
                                <li>Easy</li>
                                <li>Fast</li>
                                <li>Professional</li>
                                <li>Customizable</li>
                            </ul>
                        </marquee>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;