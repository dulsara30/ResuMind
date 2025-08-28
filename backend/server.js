import express from "express";
import cors from "cors";
import helmet from "helmet";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import resumeRouter from "./routes/resuMindRoutes.js";

dotenv.config();

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors());

app.use("/api/resume", resumeRouter);

try {
    console.log("DB Connecting...")
    await connectDB();
    // app.use("/api/ResuMind", routes);
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`Server is runing on port ${PORT}`);
    })
} catch (err) {
    console.log("Connetion failed: ", err.message);

    process.exit(1);
}


