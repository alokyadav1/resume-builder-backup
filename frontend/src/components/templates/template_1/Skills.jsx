import {TbBulb} from 'react-icons/tb';
import {FaHtml5, FaJava } from 'react-icons/fa';
function Skills({ skills }) {
    return (
        <div className="skills mb-2">
            <div className="skills-header text-2xl font-bold text-blue-700 flex items-center gap-x-2">
                <TbBulb className='text-2xl' />
                <h1 className="">Skills</h1>
            </div>
            <div className="skills-body text-sm p-2">
                <ul className='flex flex-wrap gap-2'>
                    {
                        skills.map((skill) => {
                            return (
                                <li className=' bg-blue-500 text-white p-1 px-3 rounded-full shadow-inner'>{skill}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Skills;