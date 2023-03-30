import React, {useState} from "react"
import {RxCross2} from "react-icons/rx"
import {MdOutlineAddCircle} from "react-icons/md"
function Skill() {
    const [skills, setSkills] = useState([])
    const [skill, setSkill] = useState("")

    const handleAddSkill = (e) => {
        e.preventDefault()
        if(skill){
            setSkills([...skills,skill])
            setSkill("")
        }
    }

    const handleRemoveSkill = (index) => {
        const arr = skills;
        arr.splice(index,1)
        setSkills([...arr])
    }
    return (
        <div className="bg-white rounded-md pb-3 w-96">
            <div className="title p-3 text-center">
                <h1 className="text-4xl font-bold">Skills</h1>
            </div>
            <hr />
            <div className="body p-3">
                <div className="flex flex-wrap gap-2 py-2">
                    {
                        skills.map((s,index) => {
                            return (
                                <div className="bg-blue-700 text-white p-1 px-2 rounded-full shadow-inner flex gap-x-2 items-center">
                                    <p>{s}</p>
                                    <RxCross2 className="cursor-pointer" onClick={() => handleRemoveSkill(index)} />
                                </div>
                            )
                        })
                    }
                </div>
                <form>
                    <input
                        type="text"
                        name="skill"
                        placeholder={"skill " + (skills.length+1)}
                        value={skill}
                        onChange={(e) => setSkill(e.target.value)}
                        className="bg-slate-200 text-black p-2 rounded-md shadow-md border border-slate-700 border-opacity-50 w-full" />
                    <div className="flex justify-center mt-3">
                        <button className="bg-indigo-700 text-white p-2 px-3 rounded-md shadow-md" onClick={handleAddSkill}><MdOutlineAddCircle /></button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Skill;