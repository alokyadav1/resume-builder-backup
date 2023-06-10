import React from 'react';
import {IoMdPersonAdd} from 'react-icons/io';
import './formTab.css';
function Section({ section, handleTabChange, activeTab, handleFakeData}) {
    return (
        <div className='section relative h-fit p-2'>
            <div className="flex flex-col gap-y-3 justify-center">
                {
                    section.map((item, index) => {
                        return (
                            <button
                                onClick={() => handleTabChange(index)}
                                className={activeTab === item ? "active-tab" : ""}>{item}</button>
                        )
                    })
                }
            </div>
            <hr className=' border-1 border-slate-300 m-5' />
            <div className="dummyData flex justify-center">
                <button 
                className='flex items-center justify-center gap-2 bg-blue-700 text-white rounded shadow-lg p-2 cursor-pointer'
                onClick={handleFakeData}><IoMdPersonAdd /> Sample Data</button>
            </div>
        </div>
    );
}

export default Section;