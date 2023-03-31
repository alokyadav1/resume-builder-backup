import React from 'react';
import Contact from './Contact';
import Summary from './Summary';
import Education from './Education';
import Skills from './Skills';
import Language from './Language';
import Experience from './Experience';
import Projects from './Projects';


const Template = React.forwardRef(({ resumeInfo }, ref) => {
    return (
        <div className="bg-slate-100 w-full mx-auto" ref={ref}>
            <div className="resume-header">
                <Contact contact={resumeInfo[0].contact} />
            </div>
            <div className="resume-body flex ">
                <div className="side w-2/6 bg-gray-200 p-2">
                    {
                        resumeInfo[0].summary && (
                            <Summary summary={resumeInfo[0].summary} />
                        )
                    }
                    <hr className=" border-white" />
                    {
                        resumeInfo[0].education.length > 0 && (
                            <Education education={resumeInfo[0].education} />
                        )
                    }
                    <hr className="border-white" />
                    {
                        resumeInfo[0].skills.length > 0 && (
                            <Skills skills={resumeInfo[0].skills} />
                        )
                    }

                    <hr className="border-white" />
                    {
                        resumeInfo[0].languages.length > 0 && (
                            <Language languages={resumeInfo[0].languages} />
                        )
                    }
                </div>
                <div className="side1 w-4/6 bg-white p-2">
                    {
                        resumeInfo[0].experience.length > 0 && (
                            <Experience experience={resumeInfo[0].experience} />
                        )
                    }
                    <hr />
                    {
                        resumeInfo[0].projects.length > 0 && (
                            <Projects projects={resumeInfo[0].projects} />
                        )
                    }
                    <hr />
                </div>
            </div>
        </div>
    );
})

export default Template;