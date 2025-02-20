import express from "express";
import ejslayouts from "express-ejs-layouts"
import path from "path";
import { jobController } from "./Controller/jobController.js";




const server = express();
// class instance 
const jobcontroller = new jobController();
// setting the ejs methods
server.set("view engine","ejs");
server.set("views",path.join(path.resolve(),"View"));
// setting the express-ejs-layouts
server.use(ejslayouts);
// exposing the public folder so that any file wanna use this folder can use this directly 
server.use(express.static("public"));


server.get("/",jobcontroller.landingPage);
server.get("/jobs",jobcontroller.getJobs);
server.get("/job/:id",jobcontroller.jobDetail);

server.listen(3200);
console.log("Server is listeninng at 3200")