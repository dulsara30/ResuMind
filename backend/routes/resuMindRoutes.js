import { Router } from "express";
import { resumeUploadHandler } from "../utils/multer.js";
import { resumeController } from "../handlers/controllers/resumeController.js";

const resumeRouter = Router();

resumeRouter.post("/upload", resumeUploadHandler, resumeController);

export default resumeRouter;
