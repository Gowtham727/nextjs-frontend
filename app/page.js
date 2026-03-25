// "use client";
// import Link from "next/link";
// import styles from './dashboard/home.module.css';
// export default function Home(){ 
//   return(
// <div className={styles.container}>
//       <div className={styles.card}>
//         <h1>Welcome</h1>

//         <Link href="/register" className={styles.button}>
//           Register
//         </Link>

//         <Link href="/login" className={styles.buttonOutline}>
//           Login
//         </Link>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/login2";
  }, []);

  return null;
}