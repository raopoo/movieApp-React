import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App(){
  
      const [movies, setmovies] = useState([
         {
            "genre_ids": [
                10749,
                35
            ],
            "id": 785539,
            "overview": "Aspiring pop star Erica ends up as the entertainment at her ex-fiancé’s wedding after reluctantly taking a gig at a luxurious island resort while in the wake of a music career meltdown.",
            "poster_path": "/6TrkFcgCF8Vznk45rs3qvxxejiV.jpg",
            "title": "Resort to Love",
            "vote_average": 7.4,
            "vote_count": 232
        },
        {
            "genre_ids": [
                35,
                28,
                12,
                14
            ],
            "id": 590223,
            "overview": "Seven years since the Monsterpocalypse began, Joel Dawson has been living underground in order to survive. But after reconnecting over radio with his high school girlfriend Aimee, Joel decides to venture out to reunite with her, despite all the dangerous monsters that stand in his way.",
            "poster_path": "/r4Lm1XKP0VsTgHX4LG4syAwYA2I.jpg",
            "title": "Love and Monsters",
            "vote_average": 7.5,
            "vote_count": 2573
        },
      ]);
      const getMovieRequest = async () =>{
        //const posterUrl = "https://image.tmdb.org/t/p/original/";
        const url = "https://api.themoviedb.org/3/movie/popular?api_key=0bb6bae245d4da7f34903447b12c0209";
        const response = await fetch(url);
        const responseJson = response.json();
       
        //console.log(responseJson);
        const results = await responseJson.then((result) => {
          console.log(`Find:${result}`)
          console.table(result)
            //return([result.poster_path,result.title,result.vote_average,result.vote_count])
            return(result.results);
            
        })
        //console.log(obj);
      //  const poster = responseJson.results.poster_path;
      //  for(const e in results){
      //   console.log(e)
      // }
        setmovies(results);
      }
      useEffect(() => {
        getMovieRequest();
      }, []);
return(
    <div className="app">
      <Navbar />
      <Searchbar />
      <MovieList movies = {movies} />
    </div>
  )
}

export default App;