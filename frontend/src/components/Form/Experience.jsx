import React, { useState } from "react"
import { RxCross2 } from "react-icons/rx"
function Experience() {
    const [ind, setInd] = useState(null)
    const [btnText, setBtnText] = useState("Add")
    const [formData, setFormData] = useState({})
    const [experience, setExperience] = useState([])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value })
    }

    const handleAddExperience = (e) => {
        e.preventDefault();
        if (e.target.value === "Add") {
            setExperience([...experience, formData])
        }
        if (e.target.value === "Save Changes") {
            let arr = experience;
            arr[ind] = formData;
            setExperience([...arr])
            setBtnText("Add")
            setInd(null)
        }
        setFormData({})
    }

    const handleRemoveExperience = (index) => {
        const arr = experience;
        arr.splice(index, 1)
        setExperience([...arr])
        setFormData({})
        setBtnText("Add")
        setInd(null)
    }

    const handleEdit = (index) => {
        setFormData(experience[index])
        setBtnText("Save Changes")
        setInd(index)
    }
    return (
        <div className="bg-white rounded-md max-w-md ">
            <div className="title p-3 text-center">
                <h1 className="text-4xl font-bold">Experience</h1>
            </div>
            <hr />
            <div className="body p-3">
                <div className="flex flex-wrap gap-2">
                    {
                        experience.map((exp, index) => {
                            return (
                                <div className="bg-blue-700 text-white p-1 px-2 rounded-full shadow-inner flex gap-x-2 items-center">
                                    <p
                                        onClick={() => handleEdit(index)}
                                        className=" cursor-pointer">{exp.companyName}</p>
                                    <RxCross2 className="cursor-pointer" onClick={() => handleRemoveExperience(index)} />
                                </div>
                            )
                        })
                    }
                </div>
                <form>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <div className="w-1/3">
                            <label htmlFor="companyName">Company Name: </label>
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName ? formData.companyName : ""}
                                onChange={handleChange}
                                placeholder="eg. Google"
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md w-full border border-slate-700 border-opacity-50" />
                        </div>
                    </div>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <div className="w-1/3">
                            <label htmlFor="position">Position: </label>
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                name="position"
                                value={formData.position ? formData.position : ""}
                                onChange={handleChange}
                                placeholder="eg. web developer"
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md w-full border border-slate-700 border-opacity-50" />
                        </div>
                    </div>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <textarea
                            rows={3}
                            placeholder="Responsibilities"
                            name="responsibility"
                            value={formData.responsibility ? formData.responsibility : ""}
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
                    <div className="flex justify-center my-3">
                        <button
                            value={btnText}
                            onClick={handleAddExperience}
                            className="bg-blue-700 text-white p-2 px-5 rounded-full shadow-lg">{btnText}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Experience;