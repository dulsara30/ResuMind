import multer from "multer";

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, cb) => {
        const allowedMimeTypes = [
            "application/pdf",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ];

        if (allowedMimeTypes.includes(file.mimetype)) {
            return cb(null, true);
        }

        const err = new Error("Only PDF and DOCX files are allowed");
        err.statusCode = 400;
        cb(err);
    },
    limits: {
        files: 1,
        fileSize: 5 * 1024 * 1024
    },
});

export const resumeUploadHandler = (req, res, next) => {
    upload.single("resume")(req, res, (err) => {
        if (err) {
            return res.status(err.statusCode || 500).json({ error: err.message });
        }
        next();
    });
};