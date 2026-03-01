"use client";
import {useState,useEffect} from "react";
import {useRouter} from "next/navigation";
export default function Home(){
  const router=useRouter();
  const[username,setname]=useState("");
  const[password,setpassword]=useState("");
  const handleloginsubmit= async(e) => {
   e.preventDefault();
   const login=() => [{
      username:username,
      password:password
   }];
   try{
    const res=await fetch("http://localhost:8080/api/products/login",{
      method:"POST",
     headers:
     { "Content-Type":"application/json"
     },
     body:JSON.stringify(login)
     
    });
   const data= res.json();
   if(data){
     router.push("/dashboard");
   }

   }
   catch(error){
console.log("failed to post");
   }
  }
  return(
<div>
  <form onSubmit={handleloginsubmit}>
    <label>username : </label>
    <input type="text" name="username" value={username}
    onChange={(e) => setname(e.target.value)}></input>
    <br></br>
     <label>password : </label>
      <input type="text" name="password" value={password}
    onChange={(e) => setpassword(e.target.value)}></input>
    <br></br>
    <button type="submit">submit</button>

  </form>


</div>
  );
}