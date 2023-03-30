import { FiClipboard } from 'react-icons/fi';
function Summary({summary}) {
    return (
        <div className="summary mb-2">
            <div className="summary-header text-2xl font-bold text-blue-700 flex items-center gap-x-2">
                <FiClipboard className='text-lg'/>
                <h1>Summary</h1>
            </div>
            <div className="summary-body p-2">
                <p className="text-sm text-justify">{summary}</p>
            </div>
        </div>
    );
}

export default Summary;