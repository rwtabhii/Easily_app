export class jobsModel {
    constructor(id, companyname, jobtype, joblocation, salary, skills, applyby, numberofopening, jobposted, applicant) {
        this.id = id;
        this.companyname = companyname;
        this.jobtype = jobtype;
        this.joblocation = joblocation;
        this.salary = salary;
        this.skills = skills;
        this.applyby = applyby;
        this.numberofopening = numberofopening;
        this.jobposted = jobposted;
        this.applicant = applicant;
    }

    static getJobs() {
        return jobs;

    }
    static getbyId(id){
        return jobs.find(job=>job.id == id);
        

    }
   

}
let jobs = [
    new jobsModel(1, "Coding Ninja", "SDE", "Pune", "7-14lpa", ["REACT", "SQL", "Nodejs", "JS", "MongoDB", "Express", "AWS"], "30-Aug-2023", 5, new Date().toISOString(), 1),
    new jobsModel(2, "Amazon", "SDE2", "Delhi", "17-20lpa", ["REACT", "SQL", "Nodejs", "JS", "MongoDB", "Express", "AWS"], "12-Aug-2023", 5, new Date().toISOString(), 1),
    new jobsModel(3, "Microsoft", "MERN", "Noida", "7-20lpa", ["REACT", "SQL", "Nodejs", "JS", "MongoDB", "Express", "AWS"], "30-Aug-2023", 5,new Date().toISOString(), 1),

];


let recruter = [];
let applicant = [];