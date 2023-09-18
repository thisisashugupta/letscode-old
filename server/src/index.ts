import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import session, { Session } from "express-session";
import birdsRouter from './routes/birds.js';

dotenv.config();
const PORT = process.env.PORT;
const app: Application = express();
const router = express.Router()

app.use(express.urlencoded({ extended: false })); // to parse html form data
app.use(express.json()); // to parse json
app.use('/birds', birdsRouter);

const requireLogin = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.session_id) {
        return res.redirect("/login");
    }
    next();
};

app.post("/signup", async (req, res) => {

    try {
        const { username, password } = req.body;
        console.log(username, password);
        const userExists = null;
        if (!userExists) return res.redirect(`/login`);
        res.status(200).send("ono");
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }

});

app.get("/", (req, res) => {
    res.send("Hello from server");
});

app.get("/signup", (req, res) => {
    // redirect to signup page
    res.send(`<!DOCTYPE html>
    <html>
    <head>
      <title>My HTML Page</title>
    </head>
    <body>
      <h1>Hello, Express!</h1>
      <form action="/signup" method="POST">
      <input type="text" name="username" id="username" />
      <input type="text" name="password" id="password" />
      <button type="submit">Submit</button>
      </form>
    </body>
    </html>`);
});

app.get("/login", (req, res) => {
    // redirect to login page
    const { username, password } = req.body;
    res.send("Hello from server. Please login");
});

app.listen(
    PORT,
    () => console.log(`server started at port http://localhost:${PORT}`)
);
export { }