import React, { useRef, useReducer, useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
// import Template from '../templates/template_1/Template1';
// import { useReactToPrint } from 'react-to-print';
import Form from '../Form/Form';
import UserContext from '../../context/userData';
import EducationReducer from '../../reducers/education';
import ExperienceReducer from '../../reducers/experience';
import SkillReducer from '../../reducers/skill';
import LanguageReducer from '../../reducers/language';
import ProjectReducer from '../../reducers/project';
import ContactReducer from '../../reducers/contact';

function Resume({ resumeInfo }) {
  const [educationR, dispatchEducation] = useReducer(EducationReducer, [])
  const [experienceR, dispatchExperience] = useReducer(ExperienceReducer, [])
  const [skillR, dispatchSkill] = useReducer(SkillReducer, [])
  const [languageR, dispatchLanguage] = useReducer(LanguageReducer, [])
  const [projectR, dispatchProject] = useReducer(ProjectReducer, [])
  const [contactR, dispatchContact] = useReducer(ContactReducer,{})

  const {user,dispatchUser} = useContext(UserContext);
  const navigate = useNavigate();
  // const [user,setUser] = useState(null);
  let userData;

  useEffect(() => {
    console.log("edu", educationR);
    console.log("exp", experienceR);
    console.log("skill", skillR);
    console.log("project", projectR);
  }, [educationR, experienceR, skillR, projectR])

  const handleSave = () => {
    userData = [
      {
        // summary: "summary",
        contact: contactR,
        education: educationR,
        experience: experienceR,
        skills: skillR,
        languages: languageR,
        projects: projectR
      }
    ]
    // setUser(userData);
    dispatchUser({
      type:"SET_USER",
      payload : userData
    })
    navigate("/choose-template")
  }
  // const componentRef = useRef();
  // const handleDownload = useReactToPrint({
  //   content: () => componentRef.current,
  // })
  return (
    <div className=' bg-slate-300'>
      <div className='form'>
        <div>
          <UserContext.Provider value={{contactR, dispatchContact, educationR, dispatchEducation, experienceR, dispatchExperience, skillR, dispatchSkill,languageR,dispatchLanguage, projectR, dispatchProject }}>
            <Form handleSave={handleSave} />
          </UserContext.Provider>
        </div>
      </div>
      {/* <div>
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
      </div> */}
    </div>
  );
}

export default Resume;
