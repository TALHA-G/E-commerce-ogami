const router = require('express').Router()
const jwt = require('jsonwebtoken')
const UserModel = require("../models/users")
const bcrypt = require('bcrypt')


router.post("/api/auth/register",async (req,res)=>{
    try {

        var hashedPassword = await bcrypt.hash(req.body.password,10)

        var user = await UserModel.create({...req.body,password:hashedPassword})

        res.json({
            success:true,
            message:user
        })
        
        

    } catch (error) {
        res.json({
            success:false,
            message:"Something went wrong, Please try again later!"
        })
    }
})

router.post("/api/auth/login", async (req, res) => {
    try {
        // Data stored in DB at the time of registration
        var data = {username:"admin", password:"admin123"}

        // JSON WEB TOKEN   (JWT)
        var userData = req.body


        if((userData.username === data.username)  && (userData.password === data.password)){

            var token = jwt.sign({username:"admin"},"ajsdfSDKFJ%&&$4773",{expiresIn:"30s"})
            var token1 = jwt.sign({username:"admin"},"ajsdfSDKFJ%&&$4773",{expiresIn:"7d"})

            res.cookie("accessToken",token,{secure:true,httpOnly:true})
            res.cookie("refreshToken",token1,{secure:true,httpOnly:true})

            res.json({
                success:true,
                message:"You'r loggedin Successfully!"
            })


        }else{
            res.status(403).json({
                success:false,
                message:"Invalid Username or Password!"
            })
        }




    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Something went wrong, Please try again later!"
        })
    }
})





module.exports = router