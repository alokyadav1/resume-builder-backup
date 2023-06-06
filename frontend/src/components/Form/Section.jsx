import React from 'react';
function Section({ section, handleTabChange, activeTab, handleFakeData}) {
    return (
        <div className='flex justify-around bg-white'>
            <div className="flex gap-x-7 justify-center  p-2 w-3/4">
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
            <div className="dummyData flex justify-end items-center pr-6  w-1/4">
                <button 
                className='bg-blue-700 text-white rounded shadow-lg p-2'
                onClick={handleFakeData}>Fake Info</button>
            </div>
        </div>
    );
}

export default Section;