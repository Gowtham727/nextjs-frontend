"use client";
import {useEffect,useState} from "react";
import styles from "./spring.module.css";
export default function Home(){
    const [message,setmessage] = useState([]);
    useEffect(() => {
         fetch("http://localhost:8090/getproducts",{
          
         })
         .then(res => res.json())
         .then(data => setmessage(data))
         .catch(error => console.log(error));
    },[])
  return (
  <div className={styles.container}>
    <h1 className={styles.title}>Product List</h1>

    <div className={styles.grid}>
      {message.map((p) => (
        <div key={p.id} className={styles.card}>
           <img className={styles.image}
              src={p.imageUrl || null}
              alt={p.name}
              
            />
          <div className={styles.name}>{p.name}</div>
          <div className={styles.price}>₹ {p.price}</div>
        </div>
      ))}
    </div>
  </div>
);
}