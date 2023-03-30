function Education() {
    return (
        <div className="bg-white rounded-md pb-3">
            <div className="title p-3 text-center">
                <h1 className="text-4xl font-bold">Education</h1>
            </div>
            <hr />
            <div className="body p-3">
                <form>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <div className="w-1/3">
                            <label htmlFor="website">Course Name: </label>
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                name="course"
                                placeholder="Enter Name of Course"
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md w-full border border-slate-700 border-opacity-50" />
                        </div>
                    </div>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <div className="w-1/3">
                            <label htmlFor="website">College/Institute: </label>
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                name="course"
                                placeholder="Enter Name of College or Institute"
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md w-full border border-slate-700 border-opacity-50" />
                        </div>
                    </div>
                    <div className="p-1 pt-5 flex items-center gap-x-3">
                        <div className="w-1/3">
                            <label htmlFor="website">Score: </label>
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                name="score"
                                placeholder="98% or 9.5 CGPA"
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md w-full border border-slate-700 border-opacity-50" />
                        </div>
                    </div>
                    <div className="flex pt-5 items-center justify-evenly">
                        <div className="p-1 flex flex-col relative">
                            <label htmlFor="start-date" className="absolute -top-2 left-4 bg-white text-sm text-blue-600 px-1">from</label>
                            <input
                                type="date"
                                name="start-date"
                                placeholder="Enter Your Name"
                                className="bg-slate-200 text-black p-2 rounded-md shadow-md border border-slate-700 border-opacity-50" />
                        </div>
                        <span className="bg-blue-700 text-white rounded-full shadow-lg w-4 h-4 flex justify-center items-center text-lg font-bolder">-</span>
                        <div className="p-1 flex flex-col relative">
                            <label htmlFor="end-date" className="absolute -top-2 left-4 bg-white text-sm text-blue-600 px-1">to</label>
                            <input
                                type="date"
                                name="end-date"
                                placeholder="Enter Your Email"
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

export default Education;