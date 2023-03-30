function Project() {
    return ( 
        <div className="bg-white rounded-md pb-3">
            <div className="title p-3 text-center">
                <h1 className="text-4xl font-bold">Projects</h1>
            </div>
            <hr />
            <div className="body p-3">
                <form>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <div className="w-1/5">
                            <label htmlFor="project_name">Project Name: </label>
                        </div>
                        <div className="w-4/5">
                            <input
                                type="text"
                                name="project_name"
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
                                placeholder="eg. MERN stack, Java, Python"
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md w-full border border-slate-700 border-opacity-50" />
                        </div>
                    </div>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                       <textarea
                       rows={3}
                       placeholder="Project Description"
                       name="project_desc"
                       className="w-full bg-slate-200 text-black p-2 rounded-md shadow-md border border-slate-700 border-opacity-50" />
                    </div>
                    <div className="flex pt-5 items-center justify-evenly">
                        <div className="p-1 flex flex-col relative">
                            <label htmlFor="start-date" className="absolute -top-2 left-4 bg-white text-sm text-blue-600 px-1">from</label>
                            <input
                                type="date"
                                name="start-date"
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md border border-slate-700 border-opacity-50" />
                        </div>
                        <span className="bg-blue-700 text-white rounded-full shadow-lg w-4 h-4 flex justify-center items-center text-lg font-bolder">-</span>
                        <div className="p-1 flex flex-col relative">
                            <label htmlFor="end-date" className="absolute -top-2 left-4 bg-white text-sm text-blue-600 px-1">to</label>
                            <input
                                type="date"
                                name="end-date"
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md border border-slate-700 border-opacity-50" />
                        </div>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <button className="bg-blue-700 text-white p-2 px-5 rounded-lg shadow-sm">Add</button>
                    </div>
                </form>
            </div>
        </div>
     );
}

export default Project;