"use client";
import {useRouter} from "next/navigation";
export default function Home() {
 const router= useRouter();
  const handleget=async() => {
        router.push("/spring");
  }
  const handlepost=async() => {
router.push("/post");
  }
  return(
<div>
  <h1>DASHBOARD PAGE</h1>
  <button onClick={handleget}>get data</button>
  <br></br>
   <button onClick={handlepost}>post data</button>
</div>
  );
}
