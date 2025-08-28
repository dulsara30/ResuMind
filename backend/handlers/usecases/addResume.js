import Resume from "../../models/Resume.js";
import { uploadToCloudinary } from "../../utils/cloudinaryUpload.js";
import { validateJobDescription } from "../../utils/validateJobDescription.js"

export const addResume = async ({ userId, file, jobDescription }) => {
    try {
        const validate = validateJobDescription(jobDescription);
        if (!validate) {
            return { ok: false, status: 400, message: "Invalid Job Description" };
        }

        const fileName = `resume_${userId}_${file.originalname}`;
        const cloudinaryResult = await uploadToCloudinary(file.buffer, fileName);
        console.log("cloudinary", cloudinaryResult);
        if (!cloudinaryResult.ok) {
            return { ok: false, status: 400, message: cloudinaryResult.message }
        }

        console.log("userId: ", userId);
        console.log("url: ", cloudinaryResult.url);

        const resume = await Resume.create({
            userId,
            fileUrl: cloudinaryResult.url,
            fileName: fileName,
            fileType: file.mimetype,
            jobDescription: jobDescription
        });

        if (!resume) {
            return {
                ok: false,
                status: 500,
                message: "Something went wrong!"
            }
        }

        return {
            ok: true,
            status: 200,
            message: "Resume upload successful!"
        }
    } catch (error) {
        console.log("Resume uploading error: ", error);
        return {
            ok: false,
            status: 400,
            message: error
        }
    }
} 