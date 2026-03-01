"use client";
import {useEffect,useState} from "react";
export default function Home(){
    const [message,setmessage] = useState([]);
    useEffect(() => {
         fetch("http://localhost:8080/api/products/")
         .then(res => res.json())
         .then(data => setmessage(data))
         .catch(error => console.log(error));
    },[])
   return (
    <div>
      {message.map(p => (
        <div key={p.id}>
          {p.name} - ₹{p.price}
        </div>
      ))}
    </div>
  );
}