"use client";
import {useState,useEffect} from "react";
export  default  function Post(){
const[name,setname]=useState("");
const[price,setprice]=useState(0);
const[id,setid]=useState(0);
const handlesubmit=async (e) =>{
    e.preventDefault();

const product = [{
    id:id,
  name:name,
  price:price
}];
try {
  const res=await fetch("http://localhost:8080/api/products/post",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(product)
    });
    const data= res.json();
    console.log(data);
       setid(0);
      setname("");
    setprice("");  

   
}
catch(error){
console.log(error);
}
  
}
return(
    <div>
        <form onSubmit={handlesubmit}>
        <h1>add products</h1>
         <input  type="number" placeholder="id" name="id" value={id} 
        onChange={(e) => setid(e.target.value) }
        ></input>
        <br></br>
        <input  type="text" placeholder="name" name="name" value={name} 
        onChange={(e) => setname(e.target.value) }
        ></input>
          <br></br>
                <input  type="number" placeholder="price" name="price" value={price}
                onChange={(e) => {setprice(e.target.value)}}></input>
               <button type="submit">submit</button>
                </form>

    </div>
)

}