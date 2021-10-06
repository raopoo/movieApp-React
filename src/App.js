import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import SearchYear from './components/SearchYear';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App(){
          
      const [movies, setmovies] = useState([]);
      //Funstion to display popular movies 
      const popularMovies = async () =>{
        const popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=0bb6bae245d4da7f34903447b12c0209";
        const response = await fetch(popularURL);
              const responseJson = response.json();
              const results = await responseJson.then((result) => {
                  return(result.results);   
              })
              if(results){
                setmovies(results);
              }  
      }
       useEffect(() => {
        popularMovies(); 
      },[]);
      const [searchValue,setSearchValue] = useState('');

      //Function to search movies using keyword
      const getMovieByKeyword = async (searchValue) =>{
        // if(searchValue !== ''){
        //   this.setState({setmovies:[]});
        // }
        const keywordURL= `https://api.themoviedb.org/3/search/movie/?api_key=0bb6bae245d4da7f34903447b12c0209&query=${searchValue}`; 
              const response = await fetch(keywordURL);
              const responseJson = response.json();
              const results = await responseJson.then((result) => {
                  return(result.results);   
              })
              if(results){
                setmovies(results);
              }        
      }
      useEffect(() => {
        getMovieByKeyword(searchValue); 
      }, [searchValue]);
    //Function for finding movies based on the year it was released 
    const [searchYear,setSearchYear] = useState('');
    const getMovieByYear = async (searchYear) =>{
      const year=Number(searchYear);
      console.log(year);
      const yearURL = `https://api.themoviedb.org/3/discover/movie?api_key=0bb6bae245d4da7f34903447b12c0209&language=en-US&page=1&include_adult=false&primary_release_year=${year}`;
              const response = await fetch(yearURL);
              const responseJson = response.json();
              const results = await responseJson.then((result) => {
                  return(result.results);   
              })
              if(results){
                setmovies(results);
              }        
      }
      useEffect(() => {
        getMovieByYear(searchYear);
      }, [searchYear]); 

    return (
      <div className="app container-fluid">
        <div className="row">
          <Navbar />
        </div>
        <div className="row d-flex mt-4 mb-4">
          <Searchbar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            heading="Search by keyword:"
          />
          <SearchYear
            searchYear={searchYear}
            setSearchYear={setSearchYear}
            heading="Search by year:"
          />
        </div>
        <div id="movieList">
          <MovieList movies={movies} />
        </div>
      </div>
    );
}

export default App;