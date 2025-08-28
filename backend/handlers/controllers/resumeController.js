import { fail, ok } from "../../utils/response.js";
import { addResume } from "../usecases/addResume.js";

export const resumeController = async (req, res) => {
    try {
        const result = await addResume({
            userId: req.body.userId,
            file: req.file,
            jobDescription: req.body.jobDescription
        });
        console.log("req.body:", req.body);
        console.log("req.file:", req.file);
        console.log("Resume details: ", result);
        if (!result.ok) return fail(res, result.message, result.status || 400);
        return ok(res, result.data, result.message, result.status || 200);
    } catch (error) {
        console.error("Error in step2Controller:", error);
        return fail(res, error || "Invalid file or job description", 400);
    }
}