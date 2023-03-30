import React, { useState } from "react";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Project";
import Skills from "./Skill";
import Section from "./Section";
import "./form.css";
function Form() {
    const section = ["Contact", "Education", "Experience", "Skills", "Projects"]
    const tabs = [<Contact />, <Education />, <Experience />, <Skills />, <Projects />];
    const [activeTab, setActiveTab] = useState(section[0]);
    const [CurrentTab, setCurrentTab] = useState(tabs[0]);

    const handleTabChange = (index) => {
        setActiveTab(section[index]);
        setCurrentTab(tabs[index]);
    }
    return (
        <div>
            <div>
                <Section
                    section={section}
                    activeTab={activeTab}
                    handleTabChange={handleTabChange} />
            </div>
            <div className="flex justify-center pt-5 h-screen">
                <div>
                    <div>
                        {CurrentTab}
                    </div>
                    <div className="flex justify-center my-3">
                        <button className="bg-blue-700 text-white p-2 px-5 rounded-full shadow-lg">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;