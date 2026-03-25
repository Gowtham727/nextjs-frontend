// /* eslint-disable */
// "use client";
// import {useState,useEffect} from "react";
// import styles from "./post.module.css";
// import { useRouter } from "next/navigation";
// export  default  function Post(){
// const[name,setname]=useState("");
// const[price,setprice]=useState(0);
// const [imageUrl, setImageUrl] = useState("");
// const router=useRouter();

//   useEffect(() => {
//     const selectedImage = localStorage.getItem("selectedImage");
//     const savedName = localStorage.getItem("postName");
//     const savedPrice = localStorage.getItem("postPrice");
    
//     if (selectedImage) {
//       setImageUrl(selectedImage);
//     }
//     if (savedName) {
//       setname(savedName);
//     }
//     if (savedPrice) {
//       setprice(Number(savedPrice));
//     }
//   }, []);


// const handlesubmit=async (e) =>{
//     e.preventDefault();

// const product = {
//   name: name,
//   productName: name,
//   price: price,
//   productPrice: price,
//   imageUrl: imageUrl, // include imageUrl in the product object;
//   image: imageUrl
// };

// console.log(product);

// try {
//  const token= localStorage.getItem("token");
//   const res=await fetch("http://localhost:8090/admin/postproducts",{
//         method:"POST",
       
//         headers:{
//             "Content-Type":"application/json",
//              "Authorization": `Bearer ${token}`
//         },
//         body:JSON.stringify(product)
       
//     });
//     if(res.ok){
//       localStorage.removeItem("postName");
//       localStorage.removeItem("postPrice");
//       localStorage.removeItem("selectedImage");
      
//       setname("");
//       setprice(0);
//       setImageUrl("");
      
//       router.push("/dashboard");
//     }
//      console.log("Status:", res.status);
   
     
    

   
// }
// catch(error){
// console.log(error);
// }
  
// }
// return(
//      <div className={styles.container}>
//       <div className={styles.card}>
//         <h1 className={styles.title}>Add Product</h1>

//         <form onSubmit={handlesubmit}>
        
//          <div className={styles.inputGroup}>
//         <input  type="text" placeholder="name" name="name" value={name} 
//         onChange={(e) => {
//           setname(e.target.value);
//           localStorage.setItem("postName", e.target.value);
//         }}
//         />
//         </div>
//           <br></br>
//            <div className={styles.inputGroup}>
//                 <input  type="number" placeholder="price" name="price" value={price}
//                 onChange={(e) => {
//                   setprice (Number((e.target.value)));
//                   localStorage.setItem("postPrice", e.target.value);
//                 }}/>
//                  </div>

//         {/* Image URL Input */}
//         <div className={styles.inputGroup}>
//           <input
//             type="text"
//             placeholder="Paste Image URL"
//             value={imageUrl}
//             onChange={(e) => setImageUrl(e.target.value)}
//           />
//         </div>

//         <br />

//         {/* Preview Image */}
//         {imageUrl && (
//           <div style={{ marginBottom: "15px" }}>
//             <img
//               src={imageUrl}
//               alt="preview"
//               style={{ width: "150px", borderRadius: "8px" }}
//             />
//           </div>
//         )}
//          <button
//              type="button"
//          onClick={()=>router.push("/searchImage")}>Choose Image
// </button>


//           <br></br>
//                <button type="submit"   className={styles.button}>submit</button>
              
//                 </form>

//     </div>
//     </div>
// )

// }