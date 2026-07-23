const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const adminRoutes = require("./routes/adminRoutes");


const app = express();


// Connect MongoDB
connectDB();



app.use(cors());

app.use(express.json());



// Test API

app.get("/", (req,res)=>{

    res.send("FreshCart Backend Running 🚀");

});



// Admin Routes

app.use(
    "/api/admin",
    adminRoutes
);



const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

    console.log(
        `Server running on port ${PORT}`
    );

});