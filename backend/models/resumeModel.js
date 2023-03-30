import mongoose from 'mongoose';
const resumeSchema = new mongoose.Schema({
    userID: { type: String, required: true },
    summary: {type: String, required: false},
    contact: {type: Object, required: false},
    education: {type: Array, required: false},
    experience: {type: Array, required: false},
    skills: {type: Array, required: false},
    projects: {type: Array, required: false},
    certifications: {type: Array, required: false},
    awards: {type: Array, required: false},
    languages: {type: Array, required: false},
    interests: {type: Array, required: false},
});
export default mongoose.model('Resume', resumeSchema);