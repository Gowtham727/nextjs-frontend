"use client";

import { useEffect, useState } from "react";
import styles from "./dashboard2.module.css";

export default function Dashboard() {

  const [view, setView] = useState("dashboard");
  const [books, setBooks] = useState([]);
  const [issued, setIssued] = useState([]);
  const [stats, setStats] = useState({});
  const [search, setSearch] = useState("");
  
  const [userIdInput, setUserIdInput] = useState("");
const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
    fetchStats();
    fetchIssued();
  }, []);

  // 📚 Fetch Books
  const fetchBooks = async () => {
    const res = await fetch("http://localhost:8080/api/books", {
      credentials: "include"
    });
    setBooks(await res.json());
  };

  // 📊 Fetch Stats
  const fetchStats = async () => {
    const res = await fetch("http://localhost:8080/api/dashboard", {
      credentials: "include"
    });
    setStats(await res.json());
  };

  // 📥 Fetch Issued Books
  const fetchIssued = async () => {
    const res = await fetch("http://localhost:8080/api/issues", {
      credentials: "include"
    });
    setIssued(await res.json());
  };

  // 🔍 Search
  const searchBooks = async () => {
    const res = await fetch(
      `http://localhost:8080/api/books/search?keyword=${search}`,
      { credentials: "include" }
    );
    setBooks(await res.json());
  };

  // 🔄 Borrow

  const borrowBook = async (id) => {
    await fetch("http://localhost:8080/api/issues/borrow", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({userId: 1, bookId: id })
    });

    fetchBooks();
    fetchStats();
     fetchMyBooks(); 
  };
const fetchMyBooks = async () => {
  try {
    const res = await fetch(
      `http://localhost:8080/api/issues/user/${userIdInput}`,
      { credentials: "include" }
    );

    if (!res.ok) {
      throw new Error("Request failed");
    }

    const text = await res.text();   // 👈 get raw response

    const data = text ? JSON.parse(text) : [];  // 👈 safe parse

    setMyBooks(data);

  } catch (err) {
    console.error(err);
    alert("Error fetching data");
  }
};
  // 🚪 Logout
  const logout = async () => {
    await fetch("http://localhost:8080/api/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    window.location.href = "/login";
  };

  return (
    <div className={styles.container}>

      {/* ✅ Sidebar */}
      <div className={styles.sidebar}>
        <h2>📚 BookBank</h2>
        <ul>
          <li
            className={view === "dashboard" ? styles.active : ""}
            onClick={() => setView("dashboard")}
          >
            Dashboard
          </li>

          <li
            className={view === "books" ? styles.active : ""}
            onClick={() => setView("books")}
          >
            Books
          </li>

          <li
            className={view === "issued" ? styles.active : ""}
            onClick={() => setView("issued")}
          >
            Issued
          </li>
          <li
    className={view === "mybooks" ? styles.active : ""}
    onClick={() => setView("mybooks")}
  >
    My Books
  </li>
        </ul>
      </div>

      {/* ✅ Main Content */}
      <div className={styles.main}>

        {/* Header */}
        <div className={styles.header}>
          <h1>{view.toUpperCase()}</h1>
          <button onClick={logout}>Logout</button>
        </div>

        {/* 📊 Dashboard */}
        {view === "dashboard" && (
          <div className={styles.stats}>
            <div className={styles.card}>
              <h3>Total Books</h3>
              <p>{stats.totalBooks || 0}</p>
            </div>
            <div className={styles.card}>
              <h3>Issued</h3>
              <p>{stats.issuedBooks || 0}</p>
            </div>
            <div className={styles.card}>
              <h3>Available</h3>
              <p>{stats.availableBooks || 0}</p>
            </div>
          </div>
        )}
       {view === "mybooks" && (
  <div>

    {/* 🔍 Input Section */}
    <div className={styles.searchBar}>
      <input
        placeholder="Enter User ID"
        value={userIdInput}
        onChange={(e) => setUserIdInput(e.target.value)}
      />
      <button onClick={fetchMyBooks}>Search</button>
    </div>

    {/* 📚 Results */}
    <div className={styles.grid}>
      {myBooks.length === 0 ? (
        <p>No books found</p>
      ) : (
        myBooks.map((item) => (
          <div key={item.id} className={styles.bookCard}>
            <h3>Book ID: {item.bookId}</h3>
            <p>Status: {item.status}</p>
            <p>Issued: {item.issueDate}</p>
            <p>
              Returned: {item.returnDate || "Not Returned"}
            </p>
          </div>
        ))
      )}
    </div>

  </div>
)}

        {/* 📚 Books */}
        {view === "books" && (
          <>
            <div className={styles.searchBar}>
              <input
                placeholder="Search books..."
                onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={searchBooks}>Search</button>
            </div>

            <div className={styles.grid}>
              {books.map((b) => (
                <div key={b.id} className={styles.bookCard}>
                  <h3>{b.title}</h3>
                  <p>{b.author}</p>
                  <span>Qty: {b.quantity}</span>

                  <button
                    disabled={b.quantity <= 0}
                    onClick={() => borrowBook(b.id)}
                  >
                    {b.quantity > 0 ? "Borrow" : "Out of Stock"}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

       {view === "issued" && (
  <div className={styles.issuedContainer}>
    <h2>Issued Books</h2>

    {issued.length === 0 ? (
      <p>No issued books</p>
    ) : (
      <div className={styles.grid}>
        {issued.map((item) => (
          <div key={item.id} className={styles.bookCard}>

            <h3>Issue #{item.id}</h3>

            <p><strong>Book ID:</strong> {item.bookId}</p>
            <p><strong>User ID:</strong> {item.userId}</p>

            <p>
              <strong>Status:</strong>{" "}
              <span className={styles.status}>
                {item.status}
              </span>
            </p>

            <p><strong>Issued On:</strong> {item.issueDate}</p>

            <p>
              <strong>Returned:</strong>{" "}
              {item.returnDate ? item.returnDate : "Not Returned"}
            </p>

          </div>
        ))}
      </div>
    )}
  </div>
)}

      </div>
    </div>
  );
}