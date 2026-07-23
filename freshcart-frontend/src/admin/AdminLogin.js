import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import "./AdminLogin.css";


function AdminLogin(){


const navigate = useNavigate();


const [email,setEmail] = useState("");

const [password,setPassword] = useState("");




const handleLogin=(e)=>{


e.preventDefault();



// temporary admin credentials

if(
email === "admin@gmail.com" &&
password === "admin123"
){


localStorage.setItem(

"admin",

JSON.stringify({

email:email

})

);



navigate("/admin");


}


else{


alert("Invalid Admin Credentials");


}



};




return(



<div className="admin-login">



<div className="admin-login-box">


<h1>

Admin Login

</h1>



<form onSubmit={handleLogin}>



<input

type="email"

placeholder="Admin Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}


/>





<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}


/>





<button>

Login

</button>



</form>


</div>



</div>



);


}



export default AdminLogin;