// "use client";
// import {useState} from 'react';
// import {useRouter} from 'next/navigation';
// import styles from  './register.module.css';
// export default function register(){
//     const[username,setusername]=useState("");
//       const[password,setpassword]=useState("");
//        const[role,setrole]=useState("ROLE_USER");
//       const router= useRouter();
//      const handlesubmit=async(e) => {
// e.preventDefault();
//  const register = {
//     username:username,
//     password:password,
//     role:role
//  }
//  console.log(register);
     
// try{
//     const res=await fetch("http://localhost:8090/register",{
//      cache:"no-store",
    
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify(register)
        
// });
// const text = await res.text(); 
//   if (res.ok) {
//     alert("Registered Successfully");
//     router.push("/dashboard");
//   } else {
//     alert("Registration failed");
//     console.log(text);
//   }
// }
     
// catch(e){
     
// }
// }
//     return(
//  <div className={styles.container}>
//       <form className={styles.form} onSubmit={handlesubmit}>
//         <h2>Register</h2>

//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setusername(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setpassword(e.target.value)}
//           required
//         />
//         <select value={role} onChange={(e) => setrole(e.target.value)}>
//           <option value="ROLE_USER">User</option>
//           <option  value="ROLE_ADMIN">Admin</option>
//         </select>

//         <button type="submit">Register</button>
//       </form>
//     </div>
//     );
// }