import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const resumeInformation = [
  {
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
    ],
    certifications: [
      {
        name: "Certification 1",
        authority: "ABC",
        startDate: "May 2017",
        endDate: "Present",
        link: "https://www.google.com/",
        authority_icon: "https://www.w3schools.com/howto/img_avatar.png"
      },
      {
        name: "Certification 2",
        authority: "XYZ",
        startDate: "May 2017",
        endDate: "Present",
        link: "https://www.github.com/",
      }
    ]
  }
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
