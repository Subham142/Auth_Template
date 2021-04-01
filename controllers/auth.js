const User = require("../models/User")
exports.register = async (req,res,next)=>{
 const {username,email,password} = req.body;

 try {
     const user = await User.create({
         username,
         email,
         password,
     });

     res.status(201).json({
         sucess:true,
         user,
     });
 } catch (error) {
    res.status(500).json({
        sucess:false,
        error: error.message,
    });
 }

};

exports.login = async (req,res,next)=>{
    const {email,password} = req.body;

    if(!email || !password){
        res.status(400).json({sucess:false,error:"Please provide email and password"})
    }

    try {
        const user = await  User.findOne({email}).select("+password");

        if(!user){
            res.status(400).json({sucess:false,error:"Invalid credentials"})
        }

        const isMatch = await user.macthPassword(password);
        
        if(!isMatch){
            res.status(400).json({sucess:false,error:"Invalid credentials"})
        }

        res.status(201).json({
            sucess:true,
            token:"asfsdfsd"
        };)
            

    } catch (error) {
        res.status(500).json({
            sucess:false,
            error:error.message
        })
    }
};
  
  
exports.forgotPassword =(req,res,next)=>{
         res.send("forgotPassword Routes");
};
 
exports.resetPassword =(req,res,next)=>{
    res.send("resetPassword Routes");
};
   