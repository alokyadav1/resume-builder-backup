import React, { useState } from "react"
import { RxCross2 } from "react-icons/rx"
function Project() {
    const [ind, setInd] = useState(null)
    const [btnText, setBtnText] = useState("Add")
    const [formData, setFormData] = useState({})
    const [project, setProject] = useState([])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value })
    }

    const handleAddProject = (e) => {
        e.preventDefault();
        if (e.target.value === "Add") {
            setProject([...project, formData])
        }
        if (e.target.value === "Save Changes") {
            let arr = project;
            arr[ind] = formData;
            setProject([...arr])
            setBtnText("Add")
            setInd(null)
        }
        setFormData({})
    }

    const handleRemoveProject = (index) => {
        const arr = project;
        arr.splice(index, 1)
        setProject([...arr])
        setFormData({})
        setBtnText("Add")
        setInd(null)
    }

    const handleEdit = (index) => {
        setFormData(project[index])
        setBtnText("Save Changes")
        setInd(index)
    }
    return (
        <div className="bg-white rounded-md pb-3 max-w-md">
            <div className="title p-3 text-center">
                <h1 className="text-4xl font-bold">Projects</h1>
            </div>
            <hr />
            <div className="body p-3">
                <div className="flex flex-wrap gap-2">
                    {
                        project.map((proj, index) => {
                            return (
                                <div className="bg-blue-700 text-white p-1 px-2 rounded-full shadow-inner flex gap-x-2 items-center">
                                    <p
                                        onClick={() => handleEdit(index)}
                                        className=" cursor-pointer">{proj.projectName}</p>
                                    <RxCross2 className="cursor-pointer" onClick={() => handleRemoveProject(index)} />
                                </div>
                            )
                        })
                    }
                </div>
                <form>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <div className="w-1/5">
                            <label htmlFor="projectName">Project Name: </label>
                        </div>
                        <div className="w-4/5">
                            <input
                                type="text"
                                name="projectName"
                                value={formData.projectName ? formData.projectName : ""}
                                onChange={handleChange}
                                placeholder="eg. Resume Builder using MERN stack"
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md w-full border border-slate-700 border-opacity-50" />
                        </div>
                    </div>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <div className="w-1/5">
                            <label htmlFor="tech">Tech Used: </label>
                        </div>
                        <div className="w-4/5">
                            <input
                                type="text"
                                name="tech"
                                value={formData.tech ? formData.tech : ""}
                                onChange={handleChange}
                                placeholder="eg. MERN stack, Java, Python"
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md w-full border border-slate-700 border-opacity-50" />
                        </div>
                    </div>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <textarea
                            rows={3}
                            placeholder="Project Description"
                            name="projectDesc"
                            value={formData.projectDesc ? formData.projectDesc : ""}
                            onChange={handleChange}
                            className="w-full bg-slate-200 text-black p-2 rounded-md shadow-md border border-slate-700 border-opacity-50" />
                    </div>
                    <div className="flex pt-5 items-center justify-evenly">
                        <div className="p-1 flex flex-col relative">
                            <label htmlFor="startDate" className="absolute -top-2 left-4 bg-white text-sm text-blue-600 px-1">from</label>
                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate ? formData.startDate : ""}
                                onChange={handleChange}
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md border border-slate-700 border-opacity-50" />
                        </div>
                        <span className="bg-blue-700 text-white rounded-full shadow-lg w-4 h-4 flex justify-center items-center text-lg font-bolder">-</span>
                        <div className="p-1 flex flex-col relative">
                            <label htmlFor="endDate" className="absolute -top-2 left-4 bg-white text-sm text-blue-600 px-1">to</label>
                            <input
                                type="date"
                                name="endDate"
                                value={formData.endDate ? formData.endDate : ""}
                                onChange={handleChange}
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md border border-slate-700 border-opacity-50" />
                        </div>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <button
                            value={btnText}
                            onClick={handleAddProject}
                            className="bg-blue-700 text-white p-2 px-5 rounded-lg shadow-sm">{btnText}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Project;