import React from 'react';
function Section({ section, handleTabChange,activeTab }) {
    return (
        <div className="flex gap-x-7 justify-center bg-white p-2">
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
    );
}

export default Section;