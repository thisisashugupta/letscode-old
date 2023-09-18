import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import session, { Session } from "express-session";
import birdsRouter from './routes/birds.js';
import authRouter from './routes/auth.js';
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT;
const app: Application = express();

app.use(cors());
app.use(express.urlencoded({ extended: false })); // to parse html form data
app.use(express.json()); // to parse json
app.use('/birds', birdsRouter);
app.use('/auth', authRouter);


const requireLogin = (req: Request, res: Response, next: NextFunction) => {
    // if (!req.session.session_id) {
    //     return res.redirect("/login");
    // }
    next();
};

app.get("/", (req, res) => {
    res.send("Hello! Lets code");
});

app.listen(
    PORT,
    () => console.log(`server started at http://localhost:${PORT}`)
);
export { }