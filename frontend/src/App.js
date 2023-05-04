import React, { useRef, useReducer, useEffect, useState } from 'react';
import './App.css';
import Template from './components/templates/template_1/Template1';
import { useReactToPrint } from 'react-to-print';
import Form from './components/Form/Form';
import UserContext from './context/userData';
import EducationReducer from './reducers/education';
import ExperienceReducer from './reducers/experience';
import SkillReducer from './reducers/skill';
import ProjectReducer from './reducers/project';
import ContactReducer from './reducers/contact';

function App({ resumeInfo }) {
  const [educationR, dispatchEducation] = useReducer(EducationReducer, [])
  const [experienceR, dispatchExperience] = useReducer(ExperienceReducer, [])
  const [skillR, dispatchSkill] = useReducer(SkillReducer, [])
  const [projectR, dispatchProject] = useReducer(ProjectReducer, [])
  const [contactR, dispatchContact] = useReducer(ContactReducer,{})

  const [user,setUser] = useState(null);
  let userData;
  const contact = {
    profile_image: "https://www.w3schools.com/howto/img_avatar.png",
    name: "Alok Yadav",
    profession: "Software Developer",
    email: "alok.yadav8879@gmail.com",
    mobile: "8104054385",
    website: "https://www.google.com/",
    linkedin: "alokyadav88/",
    github: "alokyadav1/"
  }
  const language = [
    {
      language: "English",
      fluency: "4",
    },
    {
      language: "Hindi",
      fluency: "5",
    },
    {
      language: "Marathi",
      fluency: "3",
    },
  ]

  useEffect(() => {
    console.log("edu", educationR);
    console.log("exp", experienceR);
    console.log("skill", skillR);
    console.log("project", projectR);
  }, [educationR, experienceR, skillR, projectR])

  const handleSave = () => {
    userData = [
      {
        summary: "summary",
        contact: contactR,
        education: educationR,
        experience: experienceR,
        skills: skillR,
        languages: language,
        projects: projectR
      }
    ]
    setUser(userData);
  }
  const componentRef = useRef();
  const handleDownload = useReactToPrint({
    content: () => componentRef.current,
  })
  return (
    <div className=' bg-slate-300'>
      <div className='form'>
        <div>
          <UserContext.Provider value={{contactR, dispatchContact, educationR, dispatchEducation, experienceR, dispatchExperience, skillR, dispatchSkill, projectR, dispatchProject }}>
            <Form handleSave={handleSave} />
          </UserContext.Provider>
        </div>
      </div>
      <div>
        {
          user && (
            <div>
              <div className='w-2/3 mx-auto bg-neutral-800 p-3 rounded-md shadow-2xl'>
                <Template resumeInfo={user} ref={componentRef} />
              </div>
              <div className='flex justify-center w-full'>
                <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={handleDownload}>Download</button>
              </div>
            </div>

          )
        }
      </div>
    </div>
  );
}

export default App;
