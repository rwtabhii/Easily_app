import express from "express";
import ejslayouts from "express-ejs-layouts"
import path from "path";
import { jobController } from "./Controller/jobController.js";
import { upload } from "./Middleware/fileUpload-middleware.js";




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
server.use(express.urlencoded({extended:true}))


server.get("/",jobcontroller.landingPage);
server.get("/jobs",jobcontroller.getJobs);
server.get("/job/:id",jobcontroller.jobDetail);

// submitting applicant data
server.post("/apply/:id",upload.single("image"),jobcontroller.applicantDataUpload);

// applicant list
server.get("/job/applicants/:id",jobcontroller.applicantList);
server.get("/signin",jobcontroller.siginPage);
server.post("/register",jobcontroller.postRegister);
server.post("/login",jobcontroller.validRecrutier);
server.get("/postjob",jobcontroller.postJob);
server.post("/newjob",jobcontroller.postjobData);

server.get("/updatejob/:id",jobcontroller.updateJob);
server.get("/deletejob/:id",jobcontroller.deleteJob);


server.listen(3200);
console.log("Server is listeninng at 3200");