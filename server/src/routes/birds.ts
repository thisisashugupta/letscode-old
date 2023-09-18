import { Router } from "express";
const birdsRouter = Router();

// middleware that is specific to this birdsRouter

birdsRouter.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

// define the home page route

birdsRouter.get("/", (req, res) => {
  res.send("Birds home page");
});

// define the about route

birdsRouter.get("/about", (req, res) => {
  res.send("About birds");
});
export default birdsRouter;
