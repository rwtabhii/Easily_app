import { jobsModel } from "../Model/jobMOdel.js";

export class jobController {

   // rendering the front page 
   landingPage(req, res) {
      if (req.session.recrutier) {
         return res.render("home", { name: req.session.recrutier.name });
      } else {
         return res.render("home");
      }
   }

   getJobs(req, res) {
      let jobs = jobsModel.getJobs();
      //  console.log(jobs);
      if (req.session.recrutier) {
         console.log("jobs render sucessfully for recrutier");
         return res.render("jobs", { jobs: jobs, name: req.session.recrutier.name });
      }
      else {
         console.log("jobs render sucessfully for applicant");
         return res.render("jobs", { jobs: jobs });
      }
   }
   jobDetail(req, res) {
      const id = req.params.id;

      const findJob = jobsModel.getbyId(id);
      //  console.log(findJob);
      console.log("finding the job successfully");
      if (findJob) {
         if (req.session.recrutier) {
            return res.render("job", { job: [findJob], Message: null, name: req.session.recrutier.name });
         } else {
            return res.render("job", { job: [findJob], Message: null });
         }
      }
      else {
         let error = "We cannot find this Job";
         return res.render("job", { Message: error })
      }
   }

   applicantDataUpload(req, res) {
      const jobId = req.params.id;
      const image = req.file.filename;
      const { name, email, contact } = req.body;
      jobsModel.applicantData(jobId, name, email, contact, image);
      // console.log(newapplicant);
      return res.render("job", { Message: "Job Applied successfully" });
   }

   applicantList(req, res) {
      const id = req.params.id;
      const allApplicant = jobsModel.list(id)
      if (req.session.recrutier) {
         return res.render("applicants", { applicants: allApplicant, name: req.session.recrutier.name });
      }
      else {
         return res.render("errorpage", { message: "sorry you are not a recrutier you have to be a recrutier first" });
      }
   }
   siginPage(req, res) {

      return res.render("signin")
   }


   postRegister(req, res) {
      jobsModel.registerData(req.body);
      return res.render("signin");

   }


   validRecrutier(req, res) {
      // console.log(req.body);
      const { email, password } = req.body;
      const recrutier = jobsModel.checkData(email, password);
      const jobs = jobsModel.getJobs();

      if (!recrutier) {
         return res.render("erropage", { message: "Data Doesn't Found You Have To Register As a Recurtier " })
      }
      else {
         // console.log(recrutier.name)
         // console.log(req.session)
         req.session.recrutier = {
            id: recrutier.id,
            name: recrutier.name
         }
         console.log(req.session)
         return res.render("jobs", { jobs: jobs, name: req.session.recrutier.name });
      }
   }
   postJob(req, res) {
      if (req.session.recrutier) {
         return res.render("postnewjob", { name: req.session.recrutier.name });
      }
      else {
         return res.render("errorpage", { messgae: "you have to be a recrutier first then you can post the job" });
      }

   }

   postjobData(req, res) {
      // console.log(req.session.recrutier)
      if (req.session.recrutier) {
         const id = req.session.recrutier.id;
         jobsModel.newjobData(req.body, id);
         let jobs = jobsModel.getJobs();

         return res.render("jobs", { jobs: jobs, name: req.session.recrutier.name });
      }
      else {
         return res.render("errorpage", { message: "you have to be recrutier first" })
      }
   }

   updateJob(req, res) {
      if (req.session.recrutier) {
         const recrutierid = req.session.recrutier.id
         const id = req.params.id;
         const job = jobsModel.updateJob(id);
         if (recrutierid == job.recrutierid) {
            return res.render("updatejob", { job: [job], name: req.session.recrutier.name });
         }
         else {
            // console.log("else here")
            return res.render("error", { message: "you cannot modify another recrutier job" });
         }
      }
      else {
         return res.render("errorpage", { message: "you have to be recrutier first" });
      }

   }
   postUpdateJob(req, res) {
      if (req.session.recrutier) {
         const id = req.params.id;
         const jobUpdate = jobsModel.updateData(req.body, id);
         console.log(jobUpdate);
         let jobs = jobsModel.getJobs();
         return res.render("jobs", { jobs: jobs, name: req.session.recrutier.name })
      }
      else {
         return res.render("errorpage", { message: "you have to be recrutier first" })
      }
   }
   deleteJob(req, res) {
      if (req.session.recrutier) {
         const id = req.params.id;
         const jobs = jobsModel.deleteJob(id);
         return res.render("jobs", { jobs: jobs });
      }
      else {
         return res.render("errorpage", { message: "you have to be recrutier first" })
      }
   }
   searchjob(req, res) {
      const { jobtype } = req.body;
      // console.log(req.body)
      // console.log(jobtype);
      const jobs = jobsModel.searchJob(jobtype);
      if (jobs) {
         return res.render("jobs", { jobs: jobs });
      }
      else {
         return res.render("errorpage", { message: "jobs not found" });
      }
   }

   logout(req, res) {
      req.session.destroy(err => {
         if (err) {
            console.log(err);
         } else {
            return res.redirect("/");
         }
      });
   }
}

