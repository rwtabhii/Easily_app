// import path from "path";
export class jobsModel {
    constructor(id, companyname, jobtype, jobdesignation, joblocation, salary, skills, applyby, numberofopening, jobposted, applicants) {
        this.id = id;
        this.companyname = companyname;
        this.jobtype = jobtype
        this.jobdesignation = jobdesignation;
        this.joblocation = joblocation;
        this.salary = salary;
        this.skills = skills;
        this.applyby = applyby;
        this.numberofopening = numberofopening;
        this.jobposted = jobposted;
        this.applicants = applicants
    }

    static getJobs() {
        console.log(jobs);
        return jobs;
    }
    static getbyId(id) {
        return jobs.find(job => job.id == id);
    }

    static applicantData(jobId, name, email, contact, image) {
        let job = jobsModel.getbyId(jobId);
        let newApplicant = {
            jobid: jobId,
            id: job.applicants.length + 1,
            name,
            email,
            contact,
            image
        };
        console.log(newApplicant);
        job.applicants.push(newApplicant);
        return job.applicants;
    }
    static list(jobId) {
        let job = jobsModel.getbyId(jobId);
        // console.log(job.applicants)
        return job.applicants;

    }

    static registerData(data) {
        const { name, email, companyName, password } = data
        const obj = {
            name,
            email,
            companyName,
            password
        };
        console.log("You Have Been Register Successfully");
        return recrutier.push(obj);
    }
    static checkData(email, password) {
        let findRecrutier = recrutier.find(u => u.email == email && u.password == password)
        return findRecrutier;
    }
    static newjobData(data) {
        const { companyname, jobtype, jobdesignation, joblocation, salary, skills, applyby, numberofopening } = data;
        const job = new jobsModel(jobs.length + 1, companyname, jobtype, jobdesignation, joblocation, salary,skills, applyby, numberofopening,new Date().toISOString(),[]);
        console.log(job);
       return jobs.push(job);
    }
    static updateJob(id){
        return jobs.find(job => job.id == id);   
    }
    static deleteJob(id){
      const job =  jobs.find(job => job.id == id);
      jobs.splice(job,1);
      return jobs
      

    }


}
let jobs = [
    new jobsModel(1, "Coding Ninja", "SDE", "Tech", "Pune", "7-14lpa", ["REACT", "SQL", "Nodejs", "JS", "MongoDB", "Express", "AWS"], "30-Aug-2023", 0, new Date().toISOString(), []
    ),
    new jobsModel(2, "Amazon", "SDE2", "Tech", "Delhi", "17-20lpa", ["REACT", "SQL", "Nodejs", "JS", "MongoDB", "Express", "AWS"], "12-Aug-2023", 0, new Date().toISOString(), []
    ),
    new jobsModel(3, "Microsoft", "MERN", "Tech", "Noida", "7-20lpa", ["REACT", "SQL", "Nodejs", "JS", "MongoDB", "Express", "AWS"], "30-Aug-2023", 0, new Date().toISOString(), []
    ),

];

let recrutier = [];
