import React, { useRef } from 'react';
import './App.css';
import Template from './components/templates/template_1/Template1';
import { useReactToPrint } from 'react-to-print';
import Form from './components/Form/Form';
function App({ resumeInfo }) {

  const componentRef = useRef();
  const handleDownload = useReactToPrint({
    content: () => componentRef.current,
  })
  return (
    <div className=' bg-slate-300'>
      <div className='form h-screen'>
        <div>
          <Form />
        </div>
      </div>
      <div>
        <div className='w-2/3 mx-auto bg-neutral-800 p-3 rounded-md shadow-2xl'>
          <Template resumeInfo={resumeInfo} ref={componentRef} />
        </div>
        <div className='flex justify-center w-full'>
          <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={handleDownload}>Download</button>
        </div>
      </div>
    </div>
  );
}

export default App;
