import React, { useState, useContext } from "react";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Project";
import Skills from "./Skill";
import Language from "./Language";
import Section from "./Section";
import UserContext from "../../context/userData"
import "./form.css";
function Form({ handleSave }) {
    const fakeData = {
        summary: "I am a software developer with 3 years of experience in the industry. I have worked on a variety of projects, including web applications, mobile applications, and desktop applications. I am passionate about creating software that is both functional and beautiful. I am a quick learner and a team player. I am looking for a position where I can continue to grow as a developer and as a person.",
        contact: {
            profile_image: "https://www.w3schools.com/howto/img_avatar.png",
            name: "Alok Yadav",
            profession: "Software Developer",
            email: "alok.yadav8879@gmail.com",
            mobile: "8104054385",
            website: "https://www.google.com/",
            linkedin: "alokyadav88/",
            github: "alokyadav1/"
        },
        education: [
            {
                course_name: "high school",
                school_name: "RBT Vidyalaya",
                percentage: "80%",
                startDate: "2012",
                endDate: "2014",
            },
            {
                course_name: "BSC IT",
                school_name: "Somaiya College",
                percentage: "80%",
                startDate: "2012",
                endDate: "2014",
            },
            {
                course_name: "MCA",
                school_name: "VJTI",
                percentage: "80%",
                startDate: "2012",
                endDate: "2014",
            }
        ],
        experience: [
            {
                company: "ACME Inc.",
                position: "Software Developer",
                startDate: "June 2017",
                endDate: "Present",
                responsibilities: [
                    "Developed and maintained web applications",
                    "Collaborated with team members to design and implement new features"
                ]
            },
            {
                company: "XYZ Corp.",
                position: "Software Engineer",
                startDate: "May 2015",
                endDate: "May 2017",
                responsibilities: [
                    "Designed and developed software solutions for clients",
                    "Tested and debugged code"
                ]
            }
        ],
        skills: [
            "Java",
            "Python",
            "JavaScript",
            "SQL"
        ],
        languages: [
            {
                name: "English",
                fluency: "4",
            },
            {
                name: "Hindi",
                fluency: "5",
            },
            {
                name: "Marathi",
                fluency: "3",
            },
        ],
        projects: [
            {
                name: "Project 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                startDate: "May 2017",
                endDate: "Present",
                technologies: [
                    "Java",
                    "Python",
                    "JavaScript",
                    "SQL"
                ],
                link: "https://www.google.com/"
            },
            {
                name: "Project 2",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                startDate: "May 2017",
                endDate: "Present",
                technologies: [
                    "Java",
                    "Python",
                    "JavaScript",
                    "SQL"
                ],
                link: "https://www.github.com/",
            }
        ]
    }
    const section = ["Contact", "Education", "Experience", "Skills", "Languages", "Projects"]
    const tabs = [<Contact />, <Education />, <Experience />, <Skills />, <Language />, <Projects />];
    const [activeTab, setActiveTab] = useState(section[0]);
    const [CurrentTab, setCurrentTab] = useState(tabs[0]);

    const { contactR, dispatchContact } = useContext(UserContext)
    const { educationR, dispatchEducation } = useContext(UserContext);
    const { experienceR, dispatchExperience } = useContext(UserContext);
    const { skillsR, dispatchSkill } = useContext(UserContext);
    const { languageR, dispatchLanguage } = useContext(UserContext);
    const { projectR, dispatchProject } = useContext(UserContext);



    const handleTabChange = (index) => {
        setActiveTab(section[index]);
        setCurrentTab(tabs[index]);
    }
    const handleFakeData = () => {
        dispatchContact({
            type: "SET_CONTACT",
            payload: fakeData.contact
        })
        dispatchEducation({
            type: "SET_EDUCATION",
            payload: fakeData.education
        })
        dispatchExperience({
            type: "SET_EXPERIENCE",
            payload: fakeData.experience
        })
        dispatchSkill({
            type: "SET_SKILL",
            payload: fakeData.skills
        })
        dispatchLanguage({
            type: "SET_LANGUAGE",
            payload: fakeData.languages
        })
        dispatchProject({
            type: "SET_PROJECT",
            payload: fakeData.projects
        })
    }
    return (
        <div>
            <div>
                <Section
                    section={section}
                    activeTab={activeTab}
                    handleTabChange={handleTabChange}
                    handleFakeData={handleFakeData} />
            </div>

            <div className="flex justify-center pt-5 h-screen">
                <div>
                    <div>
                        {CurrentTab}
                    </div>
                    <div className="flex justify-center my-3">
                        <button
                            onClick={handleSave}
                            className="bg-blue-700 text-white p-2 px-5 rounded-full shadow-lg">Choose template</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;