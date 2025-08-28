import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    fileUrl: {
        type: String,
        required: true,
    },
    fileName: {
        type: String,
        required: true,
    },
    fileType: {
        type: String,
        required: true,
    },
    jobDescription: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export default mongoose.model("Resume", resumeSchema);