import React, { useState, useContext, useEffect } from "react"
import { RxCross2 } from "react-icons/rx"
import { FaStar } from "react-icons/fa";
import UserContext from "../../context/userData"
function Language() {
    const { languageR, dispatchLanguage } = useContext(UserContext)
    const [ind, setInd] = useState(null)
    const [btnText, setBtnText] = useState("Add")
    const [languages, setLanguages] = useState(languageR)
    const [language, setLanguage] = useState({name:"",fluency:1})

    useEffect(() => {
        dispatchLanguage({
            type: "SET_LANGUAGE",
            payload: languages
        })
    }, [languages])

    const handleAddSkill = (e) => {
        e.preventDefault()
        if (btnText === "Add") {
            setLanguages([...languages, language])
        } else {
            let arr = languages;
            arr[ind] = language;
            setLanguages([...arr])
            setBtnText("Add")
            setInd(null)
        }
        setLanguage({ name: "", fluency: 1 })

    }

    const handleRemoveSkill = (index) => {
        const arr = languages;
        arr.splice(index, 1)
        setLanguages([...arr])
    }
    const handleEdit = (index) => {
        setLanguage(languages[index])
        setBtnText("Save Changes")
        setInd(index)
    }
    return (
        <div className="bg-white rounded-md pb-3 sm:w-96 shadow-xl">
            <div className="title p-3 text-center">
                <h1 className="text-4xl font-bold">Languages</h1>
            </div>
            <hr />
            <div className="body p-3">
                <div className="flex flex-wrap gap-2 py-2">
                    {
                        languages.map((s, index) => {
                            return (
                                <div className="bg-blue-700 text-white p-1 px-2 rounded-full shadow-inner flex gap-x-2 items-center">
                                    <p
                                        onClick={() => handleEdit(index)}
                                        className="cursor-pointer">{s.name}</p>
                                    <RxCross2 className="cursor-pointer" onClick={() => handleRemoveSkill(index)} />
                                </div>
                            )
                        })
                    }
                </div>
                <form onSubmit={handleAddSkill}>
                    <input
                        type="text"
                        name="language"
                        placeholder={"language " + (languages.length + 1) + " *"}
                        value={language.name}
                        required={true}
                        onChange={(e) => setLanguage({ ...language, name: e.target.value })}
                        className="rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4 w-full" />
                    <div className="fluency flex gap-x-1 mt-2 mx-auto">
                        {
                            [1, 2, 3, 4, 5].map((star) => {
                                return (
                                    <FaStar 
                                    className={star <= language.fluency ? 'text-blue-700' : 'text-gray-400'}
                                    name={star} onClick={e => setLanguage({...language,fluency:star})} />
                                )
                            })
                        }
                    </div>
                    <div className="flex justify-center mt-3">
                        <button
                            type="submit"
                            value={btnText}
                            className="bg-indigo-700 text-white p-2 px-3 rounded-md shadow-md"
                        >{btnText}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Language;