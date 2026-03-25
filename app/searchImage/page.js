"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./photos.module.css";

export default function Photos() {

  const [value, setValue] = useState("");
  const [photos, setPhotos] = useState([]);
  const router = useRouter();
   const handleSelectImage = (url) => {

  localStorage.setItem("selectedImage", url);

  router.back(); // go back to product page
};

  const submit = async () => {
    if (!value) return;

    try {
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=${value}&per_page=12`,
        {
          headers: {
            Authorization:
              "ELWeFmThNGXaellpS5m1cu2RehZXMvTa2DFo1nQ8Ru9GlhaUbQHPlcWd",
          },
        }
      );

      const data = await res.json();
      setPhotos(data.photos || []);

    } catch (err) {
      console.error(err);
    }
  };
 
  return (
    <div className={styles.container}>

      <h1 className={styles.title}>Pexels Image Search</h1>

      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search beautiful images..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button onClick={submit}>Search</button>
      </div>

      <div className={styles.gallery}>
        {photos.length > 0 ? (
          photos.map((photo) => (
            <div className={styles.card} key={photo.id}>

              <img
                src={photo.src.medium}
                alt={photo.photographer}
              />

              <div className={styles.cardFooter}>
                <p>{photo.photographer}</p>

               <button
onClick={()=>handleSelectImage(photo.src.original)}
>
Select Image
</button>
              </div>

            </div>
          ))
        ) : (
          <p className={styles.empty}>Search something to see images</p>
        )}
      </div>

    </div>
  );
}