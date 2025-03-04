import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    // 1 whhat is the destination 
    destination: function(req,file, cb){
     cb(null,"public/resume/");

    },
    // 2 what is th file name 
    filename : function(req,file,cb){
     const name = Date.now() + "-" + file.originalname;   
     cb(null,name);
        

    }
}) 

export  const upload = multer({
    storage: storage
})