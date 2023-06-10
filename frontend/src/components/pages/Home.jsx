import React from 'react';
import { NavLink } from "react-router-dom";
import "../../assets/styles/home.css"
function Home() {
    return (
        <div className="home bg-slate-100 w-auto text-center p-5 h-full font-sans">
            <div className='home-title w-fit'>
                <h2 className='md:text-6xl font-bold md:leading-tight md:px-10 text-lg'>Make an outstanding <span className='resume'>resume</span> for free in minutes.</h2>
                <p className=''>Showcase yourself and your achievements with an impressive resume made with the free online resume maker.</p>
            </div>
            <div className='create-container flex justify-center items-center p-10 mb-3'>
                <div className='create-btn w-3/4'>
                    <div>
                        <NavLink to="/create" className="btn md:bg-blue-700 text-white rounded-full shadow-2xl md:p-5 text-lg">Create your resume now <span className='arrow'>→</span></NavLink>
                    </div>
                </div>
                <div className="marquee w-1/4">
                    <div className="marquee__inner text-slate-800 text-sm" aria-hidden="true">
                        <marquee behavior="scroll" direction="left">
                            <ul className='flex gap-10 list-disc'>
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