import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const MovieSearchApp = () => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  const fetchMovie = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?t=${query}&apikey=40fef8a8`
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovie(data);
        setError("");
      } else {
        setMovie(null);
        setError("Movie not found!");
      }
    } catch (err) {
      setError("Error fetching data.");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchMovie();
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Movie Search</h1>
      <form onSubmit={handleSearch} style={styles.form}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie title"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          <FaSearch style={styles.icon} />
        </button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
      {movie && (
        <div style={styles.movieContainer}>
          <img
            src={movie.Poster}
            alt={movie.Title}
            style={styles.poster}
          />
          <div style={styles.details}>
            <h2 style={styles.title}>{movie.Title}</h2>
            <p style={styles.info}><strong>Year:</strong> {movie.Year}</p>
            <p style={styles.info}><strong>Genre:</strong> {movie.Genre}</p>
            <p style={styles.info}><strong>Plot:</strong> {movie.Plot}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    marginBottom: "20px",
    width: "100%",
    maxWidth: "500px",
  },
  input: {
    flex: "1",
    padding: "10px",
    fontSize: "1rem",
    border: "2px solid #ddd",
    borderRadius: "4px 0 0 4px",
    outline: "none",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "0 4px 4px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: "1.2rem",
  },
  error: {
    color: "red",
  },
  movieContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    width: "100%",
  },
  poster: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#333",
  },
  info: {
    marginBottom: "5px",
    fontSize: "1rem",
    color: "#555",
  },
};

export default MovieSearchApp;
