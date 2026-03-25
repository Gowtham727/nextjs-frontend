"use client";

import { useEffect, useState } from "react";
import styles from "./admin.module.css";

export default function AdminDashboard() {

  const [issued, setIssued] = useState([]);
  const [book, setBook] = useState({
    title: "",
    author: "",
    quantity: ""
  });

  // 📥 Fetch not returned books
  const fetchIssued = async () => {
    const res = await fetch("http://localhost:8080/api/issues/not-returned", {
      credentials: "include"
    });

    const data = await res.json();
    console.log(data);
    setIssued(data);
  };

  useEffect(() => {
    fetchIssued();
  }, []);
const returnBook = async (id) => {
   const res =  await fetch(`http://localhost:8080/api/issues/return/${id}`, {
    method: "POST",
    credentials: "include"
  });
  console.log(res);
  if (res.ok) {
    alert("Returned successfully ✅");   // 👈 your alert message
    fetchIssued(); // refresh data
  } else {
    alert("Return failed ❌");
  }
  // refresh data
  fetchIssued();
};
  // ➕ Add Book
  const addBook = async () => {
    const res = await fetch("http://localhost:8080/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book)
    });

    if (res.ok) {
      alert("Book added");
      setBook({ title: "", author: "", quantity: "" });
    }
  };

  return (
    <div className={styles.container}>

      <h1>Admin Dashboard</h1>

      {/* ➕ Add Book */}
      <div className={styles.card}>
        <h2>Add Book</h2>

        <input
          placeholder="Title"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
        />

        <input
          placeholder="Author"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
        />

        <input
          placeholder="Quantity"
          type="number"
          value={book.quantity}
          onChange={(e) => setBook({ ...book, quantity: e.target.value })}
        />

        <button onClick={addBook}>Add Book</button>
      </div>

      {/* 📚 Issued Not Returned */}
      <div className={styles.card}>
        <h2>Books Not Returned</h2>

        {issued.length === 0 ? (
          <p>No pending books</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
              
                <th>Book Id</th>
                <th>User Id</th>
                <th>Issued Date</th>
              </tr>
            </thead>

            <tbody>
              {issued.map((i) => (
                <tr key={i.id}>
                 
                  <td>{i.bookId}</td>
                  <td>{i.userId}</td>
                  <td>{i.issueDate}</td>
                  
                  <td>
        <button onClick={() => returnBook(i.id)}>
          Return
        </button>
      </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}