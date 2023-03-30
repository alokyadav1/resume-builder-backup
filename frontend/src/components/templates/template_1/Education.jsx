import {SlGraduation} from 'react-icons/sl';
function Education({ education }) {
    return (
        <div className="education">
            <div className="education-header text-2xl font-bold text-blue-700 flex items-center gap-x-2">
                <SlGraduation className='text-xl'/>
                <h1>Education</h1>
            </div>
            <div className="education-body">
                {
                    education.map((edu) => {
                        return (
                            <div>
                                <div className="education-header flex items-center justify-between border-b-2 border-blue-200 p-2">
                                    <div className="degree">
                                        <h3 className="text-xl font-bold">{edu.course_name}</h3>
                                        <p className="text-sm text-gray-700">{edu.school_name}</p>
                                        <p className="text-sm text-gray-700">Score: {edu.percentage}</p>
                                    </div>
                                    <div className="year">
                                        <p className="text-sm text-gray-700 mr-2">{edu.startDate}-{edu.endDate}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Education;