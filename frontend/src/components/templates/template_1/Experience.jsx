import { BsBriefcase } from "react-icons/bs";
import { TbPointFilled } from "react-icons/tb";
function Experience({ experience }) {
    return (
        <div className="work-experience mb-2">
            <div className="work-experience-header text-2xl font-bold text-blue-700 w-fit flex items-center gap-x-2">
                <BsBriefcase className="text-xl" />
                <h1>Work Experience</h1>
            </div>
            <div className="work-experience-body p-2">
                {
                    experience.map((work) => {
                        return (
                            <div>
                                <div className="work-header flex items-center justify-between">
                                    <div className="job-title">
                                        <h3 className="text-xl font-bold">{work.position}</h3>
                                        <p className="text-sm text-gray-700">{work.startDate} - {work.endDate}</p>
                                    </div>
                                    <div className="company">
                                        <p className="text-sm text-gray-700 mr-2">{work.company}</p>
                                    </div>
                                </div>
                                <div className="work-body text-sm text-gray-700 pl-5">
                                    <ul>
                                        {
                                            work.responsibilities.map((responsibility) => {
                                                return (
                                                    <div className="flex items-center">
                                                        <TbPointFilled className="text-blue-700" />
                                                        <li className="inline ml-2">{responsibility}</li>
                                                    </div>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Experience;