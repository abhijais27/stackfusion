import express from 'express';
const router = express.Router();
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from 'helmet';
import morgan from 'morgan';
// import userRoute from './routes/users.js';
// import authRoute from './routes/auth.js';
import postRoute from './routes/posts.js';
// import multer from 'multer';
import path from 'path';
import connectDB from './config.js';

dotenv.config();

connectDB();
// const __dirname = path.resolve();
// app.use("/images", express.static(path.join(__dirname, "public/images/assets")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/images/assets");
//   },
//   filename: (req, file, cb) => {
//     cb(null, req.body.name);
//   },
// });

// const upload = multer({ storage: storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   try {
//     return res.status(200).json("File uploded successfully");
//   } catch (error) {
//     console.error(error);
//   }
// });

// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
app.use(cors());
app.use("/api/posts", postRoute);
app.use( express.static(path.resolve(__dirname,'form','build') ) );
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname,'form','build','index.html'));
});

app.listen(8800, () => {
  console.log("Backend server is running!");
});