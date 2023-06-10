import React, { useState, useContext, useEffect } from "react"
import UserContext from "../../context/userData"
import "../../assets/styles/form.css"
function Contact() {
    const { contactR, dispatchContact } = useContext(UserContext)
    const [contact, setContact] = useState(contactR)


    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setContact({ ...contact, [name]: value })
    }

    const handleSave = (e) => {
        e.preventDefault();
        dispatchContact({
            type: "SET_CONTACT",
            payload: contact
        })
    }
    return (
        <div>
            <div className="bg-white rounded-md pb-3 shadow-xl">
                <div className="title p-3 text-center">
                    <h1 className="text-4xl font-bold">Contact</h1>
                </div>
                <hr />
                <div className=" p-3">
                    <form onSubmit={handleSave}>
                        <div className="flex justify-around flex-wrap">
                            <div className="p-1">
                                <input
                                    type="text"
                                    name="name"
                                    value={contact.name ? contact.name : ""}
                                    placeholder="Enter Your Name *"
                                    onChange={handleChange}
                                    required={true}
                                    className=" flex-1 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                            </div>
                            <div className="p-1">
                                <input
                                    type="email"
                                    name="email"
                                    value={contact.email ? contact.email : ""}
                                    placeholder="Enter Your Email *"
                                    onChange={handleChange}
                                    required={true}
                                    className=" flex-grow rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                            </div>
                        </div>
                        <div className="flex pt-5 justify-around flex-wrap">
                            <div className="p-1">
                                <input
                                    type="text"
                                    name="profession"
                                    value={contact.profession ? contact.profession : ""}
                                    placeholder="Enter Your Profession *"
                                    onChange={handleChange}
                                    className="rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                            </div>
                            <div className="p-1">
                                <input
                                    type="number"
                                    name="mobile"
                                    value={contact.mobile ? contact.mobile : ""}
                                    placeholder="Enter Mobile"
                                    onChange={handleChange}
                                    required={true}
                                    className="rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                            </div>
                        </div>
                        <div className="p-1 pt-5 flex items-center justify-start  gap-x-3">
                            <div className="w-1/5">
                                <label htmlFor="website" className="text-sm font-medium leading-6 text-gray-900">Website: </label>
                            </div>
                            <div className="w-4/5">
                                <input
                                    type="text"
                                    name="website"
                                    value={contact.website ? contact.website : ""}
                                    placeholder="Website"
                                    onChange={handleChange}
                                    className="w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                            </div>
                        </div>
                        <div className="p-1 pt-5 flex items-center gap-x-3">
                            <div className="w-1/5">
                                <label htmlFor="github" className="text-sm font-medium leading-6 text-gray-900">Github: </label>
                            </div>
                            <div className="w-4/5">
                                <input
                                    type="text"
                                    name="github"
                                    value={contact.github ? contact.github : ""}
                                    placeholder="https://github.com/alokyadav1"
                                    onChange={handleChange}
                                    className="w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                            </div>
                        </div>
                        <div className="p-1 pt-5 flex items-center gap-x-3">
                            <div className="w-1/5">
                                <label htmlFor="linkedin" className="text-sm font-medium leading-6 text-gray-900">Linkedin: </label>
                            </div>
                            <div className="w-4/5">
                                <input
                                    type="text"
                                    name="linkedin"
                                    value={contact.linkedin ? contact.linkedin : ""}
                                    placeholder="https://linkedin.com/alokyadav1"
                                    onChange={handleChange}
                                    className="w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-blue-700 text-white p-2 px-5 rounded-full shadow-lg">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;