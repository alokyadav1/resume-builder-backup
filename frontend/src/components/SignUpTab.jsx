function SignUpTab({tabs, handleTabChange,activeTab}) {
    return ( 
        <div className="flex w-full justify-evenly items-center mb-10">
            {
                tabs.map((tab, index) => {
                    return (
                        <div key={index} 
                        className={`text-center w-full rounded-md p-2 cursor-pointer ${activeTab === index ? 'bg-blue-600 text-white shadow-2xl' :'bg-slate-200'}`}
                        onClick={() => handleTabChange(index)}
                        >
                            {tab}
                        </div>
                    )
                })
            }
        </div>
     );
}

export default SignUpTab;