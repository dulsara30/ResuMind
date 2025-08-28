import cloudinary from "../config/cloudinary.js";
import streamifier from 'streamifier';

export const uploadToCloudinary = async (fileBuffer, fileName) => {

    try {

        if (!fileBuffer || !fileName) {
            return { ok: false, status: 400, message: "Error on file uploading!" }
        }
        console.log("File uploading....", fileBuffer, fileName);
        const result = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                {
                    resource_type: "raw",
                    public_id: fileName,
                    folder: 'resumind',
                },
                (error, result) => {
                    if (error) {
                        return reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
            streamifier.createReadStream(fileBuffer).pipe(stream);
        });
        console.log("Cloudinary upload successful:", result.secure_url);
        return {
            ok: true,
            status: 200,
            message: "Cloudinary upload successful",
            url: result.secure_url,
            publicId: result.public_id,
            fileType: result.resource_type,
        };

    } catch (error) {
        console.error("Cloudinary upload failed with error:", error);
        return { ok: false, status: 400, message: "Can not upload file!" };
    }

};