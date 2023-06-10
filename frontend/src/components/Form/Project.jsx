import React, { useState, useContext, useEffect } from "react"
import { RxCross2 } from "react-icons/rx"
import UserContext from "../../context/userData"
function Project() {
    const { projectR, dispatchProject } = useContext(UserContext);
    const [ind, setInd] = useState(null)
    const [btnText, setBtnText] = useState("Add")
    const [formData, setFormData] = useState({})
    const [project, setProject] = useState(projectR)

    useEffect(() => {
        dispatchProject({
            type: "SET_PROJECT",
            payload: project
        })
    }, [project])
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value })
    }
    const handleAddProject = (e) => {
        e.preventDefault();
        if (btnText === "Add") {
            setProject([...project, formData])
        }
        if (btnText === "Save Changes") {
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
        <div className="bg-white rounded-md pb-3 max-w-md shadow-xl">
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
                                        className=" cursor-pointer">{proj.name}</p>
                                    <RxCross2 className="cursor-pointer" onClick={() => handleRemoveProject(index)} />
                                </div>
                            )
                        })
                    }
                </div>
                <form onSubmit={handleAddProject}>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <div className="w-1/5">
                            <label htmlFor="name"  className="text-sm font-medium leading-6 text-gray-900">Project Name: <sup className="text-red-700 font-bold text-sm">*</sup></label>
                        </div>
                        <div className="w-4/5">
                            <input
                                type="text"
                                name="name"
                                value={formData.name ? formData.name : ""}
                                onChange={handleChange}
                                placeholder="eg. Resume Builder using MERN stack"
                                required={true}
                                className="w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                        </div>
                    </div>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <div className="w-1/5">
                            <label htmlFor="tech"  className="text-sm font-medium leading-6 text-gray-900">Tech Used: </label>
                        </div>
                        <div className="w-4/5">
                            <input
                                type="text"
                                name="tech"
                                value={formData.tech ? formData.tech : ""}
                                onChange={handleChange}
                                placeholder="eg. MERN stack, Java, Python"
                                className="w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                        </div>
                    </div>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <div className="w-1/5">
                            <label htmlFor="name"  className="text-sm font-medium leading-6 text-gray-900">Project Link: </label>
                        </div>
                        <div className="w-4/5">
                            <input
                                type="url"
                                name="link"
                                value={formData.link ? formData.link : ""}
                                onChange={handleChange}
                                placeholder="URL"
                                required={true}
                                className="w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                        </div>
                    </div>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <textarea
                            rows={3}
                            placeholder="Project Description"
                            name="description"
                            value={formData.description ? formData.description : ""}
                            onChange={handleChange}
                            className="w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                    </div>
                    <div className="flex pt-5 items-center justify-evenly">
                        <div className="p-1 flex flex-col relative">
                            <label htmlFor="startDate" className="absolute -top-2 left-4 bg-white text-sm text-blue-600 px-1">from <span className="text-red-700 font-bold text-sm">*</span></label>
                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate ? formData.startDate : ""}
                                onChange={handleChange}
                                required={true}
                                className="rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                        </div>
                        <span className="bg-blue-700 text-white rounded-full shadow-lg w-4 h-4 flex justify-center items-center text-lg font-bolder">-</span>
                        <div className="p-1 flex flex-col relative">
                            <label htmlFor="endDate" className="absolute -top-2 left-4 bg-white text-sm text-blue-600 px-1">to <span className="text-red-700 font-bold text-sm">*</span></label>
                            <input
                                type="date"
                                name="endDate"
                                value={formData.endDate ? formData.endDate : ""}
                                onChange={handleChange}
                                required={true}
                                className="rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                        </div>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <button
                            type="submit"
                            value={btnText}
                            className="bg-blue-700 text-white p-2 px-5 rounded-lg shadow-sm">{btnText}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Project;