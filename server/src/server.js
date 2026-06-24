import express from "express";
import cors from 'cors';
import 'dotenv/config'
import indexRouter from "./routes/indexRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
    if(error) {
        throw error
    }
    console.log(`Server running on port ${PORT}`);
});