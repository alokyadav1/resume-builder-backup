import { TbMessageLanguage } from "react-icons/tb"
import { FaStar } from "react-icons/fa";
function Languages({ languages }) {
    return (
        <div className="language mb-2">
            <div className="language-title text-2xl font-bold text-blue-700 flex items-center gap-x-2">
                <TbMessageLanguage className='text-2xl' />
                <h1>Language</h1>
            </div>
            <div className="language-body text-sm p-2">
                {/* {
                    languages.map((lang) => {
                        return (
                            <div className="flex justify-between">
                                <p>{lang.language}</p>
                                <div className="fluency flex gap-x-1">
                                    {
                                        [1, 2, 3, 4, 5].map((star) => {
                                            return (
                                                    <FaStar className={star <= lang.fluency ? 'text-blue-700' : 'text-gray-400'} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                } */}
            </div>
        </div>
    );
}

export default Languages;