import { AiOutlineProject } from 'react-icons/ai';
import { TbWorldWww } from 'react-icons/tb';
function Projects({ projects }) {
    // const technologies = projects.tech.split(",");
    return (
        <div className="projects mb-2">
            <div className="projects-header text-2xl font-bold text-blue-700 w-fit flex items-center gap-x-2">
                <AiOutlineProject className='text-xl' />
                <h1>Projects</h1>
            </div>
            <div className="projects-body p-2">
                {
                    projects.map((project) => {
                        return (
                            <div className='border-b-2 border-blue-200 px-2'>
                                <div className="project-header flex items-center justify-between">
                                    <div className="project-title">
                                        <h3 className="text-xl font-bold">{project.name}</h3>
                                    </div>
                                    <div className="project-timeline">
                                        <p className="text-sm text-gray-700 mr-2">{project.startDate} - {project.endDate}</p>
                                    </div>
                                </div>
                                <div className="project-body text-sm text-gray-700 pl-5">
                                    <div className="project-desc">
                                        <p>{project.description}</p>
                                    </div>
                                    <div className="project-tech py-1">
                                        <h4 className=' text-lg font-medium'>Technologies Used</h4>
                                        {/* <ul className='flex gap-x-2'>
                                            {
                                                technologies.map((t) => {
                                                    return (
                                                        <li className=' bg-slate-300 text-black p-1 px-3 rounded-full shadow-inner'>{t}</li>
                                                    )
                                                })
                                            }
                                        </ul> */}
                                        <p>{project.tech}</p>
                                    </div>
                                    {
                                        project.link && (
                                            <div className="project-link py-1 flex items-center gap-x-1">
                                                <TbWorldWww className='text-blue-700 text-lg' />
                                                <a href={project.link} className='text-blue-700'>{project.link}</a>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Projects;