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
    return res.render("job",{job:[findJob],Message:null});
 }else{
    let error = "We cannot find this Job";
    return res.render("job",{Message:error})
 }    
}

applicantDataUpload(req,res){
    const jobId = req.params.id;
    const image = req.file.filename;
    const {name,email,contact} = req.body;
    jobsModel.applicantData(jobId,name,email,contact,image);
    // console.log(newapplicant);
   return  res.render("job",{Message: "Job Applied successfully"});  
}
 
applicantList(req,res){
   const id = req.params.id;
   const allApplicant = jobsModel.list(id)
   return res.render("applicants",{applicants:allApplicant})

}
siginPage(req,res){
   return res.render("signin")
}


postRegister(req,res){
  jobsModel.registerData(req.body);
  return res.render("signin");

}


validRecrutier(req,res){
   const {email,password} = req.body;
   const recrutier = jobsModel.checkData(email,password);
   const jobs =  jobsModel.getJobs();
   if(!recrutier){
     return res.render("errorpage",{message:"Data Doesn't Found You Have To Register As a Recurtier "})
   }
   else {
      return res.render("jobs",{jobs:jobs});
   }
 }
 postJob(req,res){
   return res.render("postnewjob");
 }

 postjobData(req,res){
   jobsModel.newjobData(req.body);
   let jobs = jobsModel.getJobs();
   return res.render("jobs",{jobs:jobs})
 }
  
 updateJob(req,res){
   const id = req.params.id;
    const job = jobsModel.updateJob(id);
    return res.render("updatejob",{job:[job]});  
 }
 deleteJob(req,res){
   const id = req.params.id;
    const jobs = jobsModel.deleteJob(id);
   return res.render("jobs",{jobs : jobs});
 }

}

