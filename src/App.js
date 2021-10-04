import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
//import SearchYear from './components/SearchYear';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App(){
          
      const [movies, setmovies] = useState([]);
      const [searchValue,setSearchValue] = useState('');
      //const [searchYear,setSearchYear] = useState('');
      
      const getMovieRequest = async (searchValue) =>{
          const url = `https://api.themoviedb.org/3/search/movie/?api_key=0bb6bae245d4da7f34903447b12c0209&query=${searchValue}`;
              const response = await fetch(url);
              const responseJson = response.json();
              const results = await responseJson.then((result) => {
                  return(result.results);   
              })
              if(results){
                setmovies(results);
              }
              
          }
      useEffect(() => {
        getMovieRequest(searchValue);
      }, [searchValue]);
return(
    <div className="app container-fluid">
      <div className="row">
        <Navbar />
      </div>
      <div className="row d-flex mt-4 mb-4">
        <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} heading = "Search by keyword:" />
      </div>
      <div className="row">
        <MovieList movies = {movies} />
      </div>
    </div>
  )
}

export default App;