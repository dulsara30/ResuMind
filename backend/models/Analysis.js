import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema({
    resumeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resume",
        required: true,
    },
    extractedText: {
        type: String,
        required: true,
    },
    score: {
        type: String,
        required: true,
    },
    strength: {
        type: [String],
        required: true,
    },
    weaknesses: {
        type: [String],
        required: true,
    },
    suggestions: {
        type: [String],
        required: true,
    },
}, { timestamps: true });

export default mongoose.model("Analysis", analysisSchema);