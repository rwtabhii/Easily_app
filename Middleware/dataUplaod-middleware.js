import {body,valdationResult, validationResult} from "express-validator"

const validatonFunc = function(req,res,next){

// 1 set the rules
const rules = [
    body("name").notEmpty().withMessage("enter the name"),
    body("email").isEmail().withMessage("Enter valid email"),
    body("contact").notEmpty().withMessage("Enter the contact detail")
]

const error = valdationResult(req)
if(error.length>0){
    return res.status(401).render();
}
next();




}