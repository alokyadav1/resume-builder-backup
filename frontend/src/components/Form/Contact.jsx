import React, {useState} from "react"
function Contact() {
    const [contact, setContact] = useState({})
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setContact({...contact, [name]:value})
    }
    return (
        <div className="bg-white rounded-md pb-3">
            <div className="title p-3 text-center">
                <h1 className="text-4xl font-bold">Contact</h1>
            </div>
            <hr />
            <div className="body p-3">
                <form>
                    <div className="flex">
                        <div className="p-1">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your Name"
                                onChange={handleChange}
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md border border-slate-700 border-opacity-50" />
                        </div>
                        <div className="p-1">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"
                                onChange={handleChange}
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md border border-slate-700 border-opacity-50" />
                        </div>
                    </div>
                    <div className="flex pt-5">
                        <div className="p-1">
                            <input
                                type="text"
                                name="profession"
                                placeholder="Enter Your Profession"
                                onChange={handleChange}
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md border border-slate-700 border-opacity-50" />
                        </div>
                        <div className="p-1">
                            <input
                                type="number"
                                name="mobile"
                                placeholder="Enter Mobile"
                                onChange={handleChange}
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md border border-slate-700 border-opacity-50" />
                        </div>
                    </div>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <div className="w-1/5">
                            <label htmlFor="website">Website: </label>
                        </div>
                        <div className="w-4/5">
                            <input
                                type="text"
                                name="website"
                                placeholder="Website"
                                onChange={handleChange}
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md w-full border border-slate-700 border-opacity-50" />
                        </div>
                    </div>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <div className="w-1/5">
                            <label htmlFor="github">Github: </label>
                        </div>
                        <div className="w-4/5">
                            <input
                                type="text"
                                name="github"
                                placeholder="https://github.com/alokyadav1"
                                onChange={handleChange}
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md w-full border border-slate-700 border-opacity-50" />
                        </div>
                    </div>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <div className="w-1/5">
                            <label htmlFor="linkedin">Linkedin: </label>
                        </div>
                        <div className="w-4/5">
                            <input
                                type="text"
                                name="linkedin"
                                placeholder="https://linkedin.com/alokyadav1"
                                onChange={handleChange}
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md w-full border border-slate-700 border-opacity-50" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;