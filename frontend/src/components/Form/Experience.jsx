import React, { useState, useContext, useEffect } from "react"
import UserContext from "../../context/userData";
import { RxCross2 } from "react-icons/rx"
function Experience() {
    const { experienceR, dispatchExperience } = useContext(UserContext);
    const [ind, setInd] = useState(null)
    const [btnText, setBtnText] = useState("Add")
    const [formData, setFormData] = useState({})
    const [experience, setExperience] = useState(experienceR)

    useEffect(() => {
        dispatchExperience({
            type: "SET_EXPERIENCE",
            payload: experience
        })
    }, [experience])
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value })
    }

    const handleAddExperience = (e) => {
        e.preventDefault();
        if (btnText === "Add") {
            setExperience([...experience, formData])
        }
        if (btnText === "Save Changes") {
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
        <div className="bg-white rounded-md max-w-md shadow-xl ">
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
                                        className=" cursor-pointer">{exp.company}</p>
                                    <RxCross2 className="cursor-pointer" onClick={() => handleRemoveExperience(index)} />
                                </div>
                            )
                        })
                    }
                </div>
                <form onSubmit={handleAddExperience} className="form-cont">
                    <div className="p-1 pt-5 flex items-center gap-x-3 flex-wrap">
                        <div className="w-1/3">
                            <label htmlFor="company"  className="text-sm font-medium leading-6 text-gray-900">Company Name: <sup className="text-red-700 font-bold text-sm">*</sup> </label>
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                name="company"
                                value={formData.company ? formData.company : ""}
                                onChange={handleChange}
                                placeholder="eg. Google"
                                required={true}
                                className="w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                        </div>
                    </div>
                    <div className="p-1 pt-5 flex items-center gap-x-3 flex-wrap">
                        <div className="w-1/3">
                            <label htmlFor="position"  className="text-sm font-medium leading-6 text-gray-900">Position: <sup className="text-red-700 font-bold text-sm">*</sup> </label>
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                name="position"
                                value={formData.position ? formData.position : ""}
                                onChange={handleChange}
                                placeholder="eg. web developer"
                                required={true}
                                className="w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                        </div>
                    </div>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <textarea
                            rows={3}
                            placeholder="Responsibilities"
                            name="responsibilities"
                            value={formData.responsibilities ? formData.responsibilities : ""}
                            onChange={handleChange}
                            className="w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                    </div>
                    <div className="flex pt-5 items-center justify-evenly flex-wrap">
                        <div className="p-1 flex flex-col relative">
                            <label htmlFor="startDate" className="absolute -top-2 left-4 bg-white text-sm text-blue-600 px-1">from <span className="text-red-700 font-bold text-sm">*</span></label>
                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate ? formData.startDate : ""}
                                onChange={handleChange}
                                required={true}
                                className="w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
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
                    <div className="flex justify-center my-3">
                        <button
                            type="submit"
                            value={btnText}
                            className="bg-blue-700 text-white p-2 px-5 rounded-full shadow-lg">{btnText}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Experience;