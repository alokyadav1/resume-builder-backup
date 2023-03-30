function Contact({ contact }) {
    return (
        <div className="personal flex items-center bg-indigo-600 text-white p-2">
            <div className="profile w-2/5">
                <img src={contact.profile_image} alt="" className="rounded-full w-32 h-32" />
            </div>
            <div className="w-3/5">
                <div className="w-fit text-center">
                    <div className="name">
                        <h1 className="text-4xl font-bold">{contact.name}</h1>
                    </div>
                    <div>
                        <h3>{contact.profession}</h3>
                        <div className="contact flex justify-center gap-x-5 text-sm italic font-bold">
                            <p className="email">{contact.email}</p>
                            <p className="phone">{contact.mobile}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;