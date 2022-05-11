import React, { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/views/Home';
import Movies from './components/views/Movies';
import Dashboard from './components/views/Dashboard';
import Header from "./components/layout/Header/Header.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";
import {navLinks} from "./assets/data/navLinks";
import API from "./services/";

import './assets/styles/reset.css';
import './assets/styles/global.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const services =  new API('https://626adc4f6a86cd64adb45a12.mockapi.io/movies');

    setIsLoading(true);
    
    services.get()
        .then((data) => {
            setMovies(data);
            setFeaturedMovies([...data].filter(movie => movie.featured === true));
            setIsLoading(false);
        }).catch(err => {
          console.log(err);
        })
  }, []);

  const addReview = (id, rating, comment) => {
   
    const _movies = [...movies];
    const index = _movies.findIndex(movie => movie.id === id);  
    _movies[index].reviews.push({
        user: `user${Math.floor(Math.random() * 99) + 1}`,
        stars: parseInt(rating),
        comment: comment,
        date: new Date().toISOString(),
    });
    setMovies(_movies);
  }

  const handleFilters = (categories) => {

    const _movies = [...movies];
    const _categories = [];

    // convert categories to an array
    Object.entries(categories).forEach(([key, value]) => {

        if (value) {
            _categories.push(key);
        }
    });

    // Reset all filters, show all movies
    if (!_categories.length) {

        const _reset = _movies.map(movie => { movie.hidden = false; return movie; });
        setMovies(_reset);
        return;
    }
    
    _movies.forEach((movie) => {

      if (!movie.categories.some(category => _categories.includes(category)) && !movie.hidden) {
          movie.hidden = true;
      } else {
            movie.hidden = false;
      }
    });

    setMovies(_movies);
 
  }

  return (

    <div className="container">
      <Header links = {navLinks} />
      <main>
        <Routes>
            <Route index element={<Home movies={featuredMovies} isLoading={isLoading} />} />
            <Route path='movies' element={<Movies movies={movies} handleFilters = {handleFilters} addReview={addReview} isLoading={isLoading} />} />
            <Route path='dashboard' element={<Dashboard />} />   
        </Routes>
      </main>
      <Footer />
    </div>

  );
}

export default App;