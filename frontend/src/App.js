import React, { useRef } from 'react';
import './App.css';
import Template from './components/templates/template_1/Template1';
import { useReactToPrint } from 'react-to-print';
function App() {
  const resumeInformation = [
    {
      summary: "I am a software developer with 3 years of experience in the industry. I have worked on a variety of projects, including web applications, mobile applications, and desktop applications. I am passionate about creating software that is both functional and beautiful. I am a quick learner and a team player. I am looking for a position where I can continue to grow as a developer and as a person.",
      contact: {
        profile_image: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Alok Yadav",
        profession: "Software Developer",
        email: "alok.yadav8879@gmail.com",
        mobile: "8104054385"
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
  ]
  const componentRef = useRef();
  const handleDownload = useReactToPrint({
    content: () => componentRef.current,
  })
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleDownload}>Download</button>
      <div className='w-2/3 mx-auto'>
        <Template resumeInfo={resumeInformation} ref={componentRef} />
      </div>
    </div>
  );
}

export default App;
