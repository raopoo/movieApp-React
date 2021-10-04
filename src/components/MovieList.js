import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Col, Row } from 'react-bootstrap';

const MovieList = (props) => {
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    
    return(
        <>
            {props.movies.map((movie,index) =>
            //console.log(movie)
            <Container> 
            <Row md={4}>   
                <Col>        
                <Card className="movieCard" style={{width:"15rem"}}> 
                  <Card.Img variant="top" src={posterUrl+movie.poster_path} className="cardImg" style={{width:"15rem"}} />
                  <Card.Body>
                     <Card.Title>Title: {movie.title}</Card.Title>
                     <h5>Rating:{movie.vote_average}({movie.vote_count})</h5>
                   </Card.Body>
                  <Button variant="primary">More Info</Button>
                 </Card>
              </Col>
            </Row>
             </Container>
            )}
        </>
    )
}

export default MovieList;