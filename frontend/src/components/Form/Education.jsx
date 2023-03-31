import React, { useState } from "react"
import {RxCross2} from "react-icons/rx"
function Education() {
    const [ind, setInd] = useState(null)
    const [btnText, setBtnText] = useState("Add")
    const [formData,setFormData] = useState({})
    const [education, setEducation] = useState([])
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [name]:value})
    }

    const handleAddEducation = (e) => {
        e.preventDefault();
        if(e.target.value === "Add"){
            setEducation([...education,formData])
        }
        if(e.target.value === "Save Changes"){
            let arr = education;
            arr[ind] = formData;
            setEducation([...arr])
            setBtnText("Add")
            setInd(null)
        }
        setFormData({})
    }

    const handleRemoveEducation = (index) => {
        const arr = education;
        arr.splice(index,1)
        setEducation([...arr])
        setFormData({})
        setBtnText("Add")
        setInd(null)
    }

    const handleEdit = (index) => {
        setFormData(education[index])
        setBtnText("Save Changes")
        setInd(index)
    }
    return (
        <div className="bg-white rounded-md pb-3 max-w-md">
            <div className="title p-3 text-center">
                <h1 className="text-4xl font-bold">Education</h1>
            </div>
            <hr />
            <div className="body p-3">
            <div className="flex flex-wrap gap-2">
                    {
                        education.map((edu,index) => {
                            return (
                                <div className="bg-blue-700 text-white p-1 px-2 rounded-full shadow-inner flex gap-x-2 items-center">
                                    <p 
                                    onClick={() => handleEdit(index)} 
                                    className=" cursor-pointer">{edu.courseName}</p>
                                    <RxCross2 className="cursor-pointer" onClick={() => handleRemoveEducation(index)} />
                                </div>
                            )
                        })
                    }
                </div>
                <form>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <div className="w-1/3">
                            <label htmlFor="courseName">Course Name: </label>
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                name="courseName"
                                value={formData.courseName?formData.courseName:""}
                                placeholder="Enter Name of Course"
                                onChange={handleChange}
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md w-full border border-slate-700 border-opacity-50" />
                        </div>
                    </div>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <div className="w-1/3">
                            <label htmlFor="institute">College/Institute: </label>
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                name="institute"
                                onChange={handleChange}
                                value={formData.institute?formData.institute:""}
                                placeholder="Enter Name of College or Institute"
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md w-full border border-slate-700 border-opacity-50" />
                        </div>
                    </div>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <div className="w-1/3">
                            <label htmlFor="score">Score: </label>
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                name="score"
                                value={formData.score?formData.score:""}
                                placeholder="98% or 9.5 CGPA"
                                onChange={handleChange}
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md w-full border border-slate-700 border-opacity-50" />
                        </div>
                    </div>
                    <div className="flex pt-5 items-center justify-evenly">
                        <div className="p-1 flex flex-col relative">
                            <label htmlFor="startDate" className="absolute -top-2 left-4 bg-white text-sm text-blue-600 px-1">from</label>
                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate?formData.startDate:""}
                                onChange={handleChange}
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md border border-slate-700 border-opacity-50" />
                        </div>
                        <span className="bg-blue-700 text-white rounded-full shadow-lg w-4 h-4 flex justify-center items-center text-lg font-bolder">-</span>
                        <div className="p-1 flex flex-col relative">
                            <label htmlFor="endDate" className="absolute -top-2 left-4 bg-white text-sm text-blue-600 px-1">to</label>
                            <input
                                type="date"
                                name="endDate"
                                value={formData.endDate?formData.endDate:""}
                                onChange={handleChange}
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md border border-slate-700 border-opacity-50" />
                        </div>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <button
                        value={btnText}
                        className="bg-blue-700 text-white p-2 px-5 rounded-lg shadow-sm" 
                        onClick={handleAddEducation}>{btnText}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Education;