// import path from "path";
export class jobsModel {
    constructor(id, recrutierid, companyname, jobtype, jobdesignation, joblocation, salary, skills, applyby, numberofopening, jobposted, applicants) {
        this.id = id;
        this.recrutierid = recrutierid,
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
        // console.log(jobs);
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
            id: recrutier.length + 1,
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
    static newjobData(data, id) {
        const { companyname, jobtype, jobdesignation, joblocation, salary, skills, applyby, numberofopening } = data;
        const recrutierid = id;

        const job = new jobsModel(jobs.length + 1, recrutierid, companyname, jobtype, jobdesignation, joblocation, salary, skills ? (Array.isArray(skills) ? skills : [skills]) : [], applyby, numberofopening, new Date().toISOString(), []);
        console.log(job);
        return jobs.push(job);
    }
    static updateJob(id) {
        return jobs.find(job => job.id == id);
    }
    static updateData(data, id) {
        console.log(data);
        const index = jobs.findIndex(p => p.id == id);
        if (index !== -1) {
            jobs[index] = {
                ...jobs[index], ...data,
                skills: data.skills ? [].concat(data.skills) : jobs.skills
            }
            //  console.log(jobs[index]);
            return jobs[index];
        }
        return null;
    }
    static deleteJob(id) {
        const job = jobs.find(job => job.id == id);
        jobs.splice(job, 1);
        return jobs


    }


}
let jobs = [
    new jobsModel(1, 1, "Coding Ninja", "SDE", "Tech", "Pune", "7-14lpa", ["REACT", "SQL", "Nodejs", "JS", "MongoDB", "Express", "AWS"], "2023-02-20", 5, new Date().toISOString(), []
    ),
    new jobsModel(2, 2, "Amazon", "SDE2", "Tech", "Delhi", "17-20lpa", ["REACT", "SQL", "Nodejs", "JS", "MongoDB", "Express", "AWS"], "2023-01-01", 4, new Date().toISOString(), []
    ),
    new jobsModel(3, 2, "Microsoft", "MERN", "Tech", "Noida", "7-20lpa", ["REACT", "SQL", "Nodejs", "JS", "MongoDB", "Express", "AWS"], "2023-05-10", 6, new Date().toISOString(), []
    ),

];

let recrutier = [{
    id: 1,
    name: "abhi",
    email: "abhi123@gmail.com",
    comapnyname: "HCL",
    password: "123"
},
{
    id: 2,
    name: "ajay",
    email: "ajay123@gmail.com",
    comapnyname: "HCLTech",
    password: "1234"
}];
