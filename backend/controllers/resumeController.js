import resumeModel from "../models/resumeModel.js";

const saveResume = async (req, res) => {
    const { id } = req.user;
    const { contact, education, experience, skills, projects, awards, languages, interests } = req.body;
    try {
        const resume = new resumeModel({ userID:id, contact, education, experience, skills, projects, awards, languages, interests });
        await resume.save();
        res.status(201).json({ message: "Resume created successfully", resume });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}
export { saveResume }