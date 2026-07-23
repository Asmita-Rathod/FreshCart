const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



exports.adminLogin = async(req,res)=>{


    try{


        const {email,password}=req.body;



        const admin = await Admin.findOne({
            email
        });



        if(!admin){

            return res.status(404).json({

                message:"Admin not found"

            });

        }



        const isMatch = await bcrypt.compare(

            password,

            admin.password

        );



        if(!isMatch){

            return res.status(401).json({

                message:"Invalid password"

            });

        }




        const token = jwt.sign(

            {
                id:admin._id,
                role:"admin"
            },

            process.env.JWT_SECRET,

            {
                expiresIn:"1d"
            }

        );



        res.json({

            message:"Login successful",

            token,

            admin:{

                id:admin._id,

                name:admin.name,

                email:admin.email

            }

        });


    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};