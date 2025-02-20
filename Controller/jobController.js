import { jobsModel } from "../Model/jobMOdel.js";

export  class jobController {

// rendering the front page 
landingPage(req,res){
   return res.render("home");
}

getJobs(req,res){
 let jobs = jobsModel.getJobs();
//  console.log(jobs);
 console.log("jobs render sucessfully");
 return res.render("jobs",{jobs:jobs});
}

jobDetail(req,res){
  const id = req.params.id;
const findJob = jobsModel.getbyId(id);
 
//  console.log(findJob);
 console.log("finding the job successfully");
 if(findJob){
    return res.render("job",{job:[findJob],errorMessage:null});
 }else{
    let error = "We cannot find this Job";
    return res.render("job",{errorMessage:error})
 }    
}
 
}

