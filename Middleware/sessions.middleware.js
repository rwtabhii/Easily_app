//  import session from "express-session";
 export const recrutierSession = (req,res,next)=>{
    if(req.session.recrutier){
        next();

    }else{
        let message = "you are not a recrutier you have to login first"
       return res.render("erropage",{message:message});
    }

}