import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

const MovieList = (props) => {
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    //console.log(props);
    return(
        <>
            {props.movies.map((movie,index) =>
            <div className="movieDiv d-flex justify-content-start m-3 flex-row">
                <Card className="movieCard"> 
                    <Card.Img variant="top" src={posterUrl+movie.poster_path} className="cardImg" height="200rem"/>
                    <Card.Body>
                        <Card.Title>Title: {movie.title}</Card.Title>
                        {/* <Card.Text>
                        Overview: {movie.overview}
                        </Card.Text> */}
                        <h5>Rating:{movie.vote_average}({movie.vote_count})</h5>
                    </Card.Body>
                     <Button variant="primary">More Info</Button>
                    </Card>
            </div>
            )}
        </>
    )
}

export default MovieList;