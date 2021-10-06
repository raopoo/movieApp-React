import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container } from 'react-bootstrap';

const MovieList = (props) => {
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    
    return (
      <>
        {props.movies.map((movie, index) => (
          //console.log(movie)
          <Container>
                  <Card className="movieCard" style={{ width: "20rem" }}>
                    <Card.Img
                      variant="top"
                      src={posterUrl + movie.poster_path}
                      className="cardImg"
                      style={{ width: "20rem" }}
                    />
                    <Card.Body className="flexible">
                      <Card.Title>Title: {movie.title}</Card.Title>
                      <h5>
                        Rating:{movie.vote_average}({movie.vote_count})
                      </h5>
                    </Card.Body>
                    <Button variant="primary">More Info</Button>
                  </Card>
          </Container>
        ))}
      </>
    );
}

export default MovieList;