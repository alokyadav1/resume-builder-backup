import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from 'react-icons/bs';
import { TbWorld } from "react-icons/tb"
import {FaMobile} from 'react-icons/fa'
function Contact({ contact }) {
    return (
        <div className="personal flex items-center bg-indigo-600 text-white">
            <div className="profile w-1/5 bg-blue-500 p-1">
                <img src={contact.profile_image} alt="" className="rounded-full w-32 h-32 mx-auto" />
            </div>
            <div className="w-4/5">
                <div className="w-full">
                    <div className="name text-center">
                        <h1 className="text-4xl font-bold">{contact.name}</h1>
                        <h6 className='text-xl font-bold'>{contact.profession}</h6>
                    </div>
                    <div>
                        <div className="contact flex flex-wrap justify-center  gap-x-5 text-sm italic font-bold">
                            {
                                contact.email && (
                                    <div className="email flex items-center gap-1">
                                        <BsFillEnvelopeFill />
                                        <p>{contact.email}</p>
                                    </div>
                                )
                            }
                            {
                                contact.mobile && (
                                    <div className="mobile flex items-center gap-1">
                                        <FaMobile />
                                        <p>{contact.mobile}</p>
                                    </div>
                                )
                            }
                            {
                                contact.website && (
                                    <div className="website flex items-center gap-1">
                                        <TbWorld />
                                        <a href={contact.website}>{contact.website}</a>
                                    </div>
                                )
                            }
                            {
                                contact.github && (
                                    <div className="github flex items-center gap-1">
                                        <BsGithub />
                                        <p>{contact.github}</p>
                                    </div>
                                )
                            }
                            {
                                contact.linkedin && (
                                    <div className="linkedin flex items-center gap-1">
                                        <BsLinkedin />
                                        <p>{contact.linkedin}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;