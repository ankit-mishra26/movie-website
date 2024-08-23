import React, { useState } from 'react';
import axios from 'axios';
import { SearchBar } from './components/SearchBar';
import { MovieList } from './components/MovieList';
import './App.css';
function App() {
  const [movies, setMovies] = useState([]);
  // const apikey = process.env.apikey
  const fetchMovies = async (searchTerm) => {
    const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=40fef8a8`);
    if (response.data.Search) {
      setMovies(response.data.Search);
      console.log(response.data);
    }
  };

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <SearchBar onSearch={fetchMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;















// import React, { useState } from 'react';
// import { FaSearch } from 'react-icons/fa';

// function App() {
//   const [movie, setMovie] = useState(null);
//   const [query, setQuery] = useState('');

//   const fetchMovie = async () => {
//     try {
//       const response = await fetch(`http://www.omdbapi.com/?t=${query}&apikey=40fef8a8`);
//       const data = await response.json();
//       setMovie(data);
//     } catch (error) {
//       console.error('Error fetching the movie data:', error);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchMovie();
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Movie Search</h1>
//       <form onSubmit={handleSearch} style={styles.form}>
//         <input
//           type="text"
//           placeholder="Search for a movie..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>
//           <FaSearch />
//         </button>
//       </form>
//       {movie && (
//         <div style={styles.movie}>
//           <img src={movie.Poster} alt={movie.Title} style={styles.poster} />
//           <div style={styles.details}>
//             <h2 style={styles.movieTitle}>{movie.Title}</h2>
//             <p><strong>Year:</strong> {movie.Year}</p>
//             <p><strong>Genre:</strong> {movie.Genre}</p>
//             <p><strong>Director:</strong> {movie.Director}</p>
//             <p><strong>Plot:</strong> {movie.Plot}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: 'center',
//     padding: '20px',
//     maxWidth: '600px',
//     margin: '0 auto',
//     fontFamily: 'Arial, sans-serif',
//   },
//   title: {
//     fontSize: '2em',
//     marginBottom: '20px',
//   },
//   form: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '20px',
//   },
//   input: {
//     padding: '10px',
//     fontSize: '1em',
//     width: '70%',
//     border: '1px solid #ccc',
//     borderRadius: '5px 0 0 5px',
//     outline: 'none',
//   },
//   button: {
//     padding: '10px',
//     fontSize: '1em',
//     border: 'none',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     cursor: 'pointer',
//     borderRadius: '0 5px 5px 0',
//   },
//   movie: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginTop: '20px',
//   },
//   poster: {
//     width: '100%',
//     maxWidth: '300px',
//     borderRadius: '10px',
//     boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//   },
//   details: {
//     textAlign: 'left',
//     marginTop: '20px',
//   },
//   movieTitle: {
//     fontSize: '1.5em',
//     marginBottom: '10px',
//   },
// };

// export default App;

