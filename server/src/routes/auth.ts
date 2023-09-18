import { Router } from "express";
import bcrypt from "bcrypt";

const authRouter = Router();

authRouter.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username, password);
        const userExists = null;
        if (userExists) return res.redirect(`/login`);
        // hash password
        // store hashed password in database with username
        // create session in db
        // send session id as a cookie in response
        res.status(200).send("ono");
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

authRouter.post("/login", (req, res) => {
    const { username, password } = req.body;
    const userExists = null;// check username in db
    if (!userExists) return res.redirect(`/signup`);// if does not exist then redirect to signup
    // hash password
    // fetch storedPassword from database
    // if not matched then send message, 2 try left
    // if matched then create session in db
    // send session id as a cookie in response
    res.send("Hello from server. Please login");
});

export default authRouter;
