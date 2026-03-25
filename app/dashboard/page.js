// "use client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import styles from "./dashboard.module.css";

// export default function Home() {
//   const router = useRouter();

//   const [query, setQuery] = useState("");
//   const [responseMessage, setResponseMessage] = useState("");
//   const [responseImage, setResponseImage] = useState("");
//   const [responseName, setResponseName] = useState("");
//   const [responsePrice, setResponsePrice] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [isChatOpen, setIsChatOpen] = useState(false);

//   const handleget = async () => {
//     router.push("/spring");
//   };

//   const handlepost = async () => {
//     router.push("/post");
//   };

//   const handleChat = async () => {
//     if (!query.trim()) return;
//     try {
//       setLoading(true);
//       setResponseMessage("");
//       setResponseImage("");
//       setResponseName("");
//       setResponsePrice("");
      
//       const productName = query.trim();
//       const res = await fetch(`http://localhost:8090/chat/response/${encodeURIComponent(productName)}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ query }),
//       });
      
//       if (!res.ok) {
//         setResponseMessage("Product not found or server error.");
//         return;
//       }
      
//       const data = await res.json();
//       if(!data){
//         setResponseMessage("Product not found.");
//         return;
//       }
//       const message = data.message || data.response;
//       const image = data.imageUrl || data.image;
//       const name = data.name || data.productName;
//       const price = data.price || data.productPrice;

//       if (!data || (!message && !image && !name)) {
//         setResponseMessage("Product not found.");
//         setResponseImage("");
//         setResponseName("");
//         setResponsePrice("");
//       } else {
//       //  setResponseMessage(message || "No text response received.");
//         setResponseImage(image || "");
//         setResponseName(name || "");
//         setResponsePrice(price || "");
//       }
//     } catch (error) {
//       console.error(error);
//       setResponseMessage("Failed to connect to the chatbot.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <div className={styles.container}>
//         <h1 className={styles.title}>DASHBOARD PAGE</h1>
        
//         <div className={styles.buttonGroup}>
//           <button onClick={handleget} className={styles.buttons}>get data</button>
//           <button onClick={handlepost} className={styles.buttons}>post data</button>
//         </div>

//         <div className={styles.floatingMenu}>
//           <button 
//             className={styles.chatButton} 
//             onClick={() => setIsChatOpen(!isChatOpen)}
//           >
//             {isChatOpen ? '✖' : '💬'}
//           </button>
          
//           {isChatOpen && (
//             <div className={styles.chatSection}>
//               <h2 className={styles.chatTitle}>Chatbot Expert</h2>
              
//               <div className={styles.inputGroup}>
//                 <input 
//                   type="text" 
//                   value={query} 
//                   onChange={(e) => setQuery(e.target.value)} 
//                   onKeyDown={(e) => e.key === 'Enter' && handleChat()}
//                   placeholder="Ask a question..."
//                   className={styles.input}
//                 />
//                 <button onClick={handleChat} disabled={loading} className={styles.buttons}>
//                   {loading ? 'Sending...' : 'Send'}
//                 </button>
//               </div>

//               {(responseMessage || responseImage || responseName || loading) && (
//                 <div className={styles.responseCard}>
//                   {loading && <p className={styles.botMessage}>Thinking...</p>}
                  
//                   {!loading && responseImage && (
//                     <img 
//                       src={responseImage} 
//                       alt="Product" 
//                       className={styles.botImage} 
//                     />
//                   )}
                  
//                   {!loading && responseName && (
//                     <h3 className={styles.productName}>{responseName}</h3>
//                   )}
                  
//                   {!loading && responsePrice && (
//                     <p className={styles.productPrice}>Price: ₹ {responsePrice}</p>
//                   )}

//                   {!loading && responseMessage && (
//                     <p className={styles.botMessage}>{responseMessage}</p>
//                   )}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

