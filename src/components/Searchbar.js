import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Row, Col, Card} from 'react-bootstrap';

const Searchbar = () => {
    return(
      <div className="container-fluid"> 
      <Card className="bg-dark text-white ">
  <Card.Img src="../images/bgPic.jpg" alt="Card image" className="bgimg" style={{height: "5rem"}} />
  <Card.ImgOverlay>
    <Form >
  <Row>
    <Col>
      <Form.Control placeholder="Movie Name" />
    </Col>
    <Col>
      <Form.Control placeholder="Genre" />
    </Col>
    <Col>
      <Form.Control placeholder="Year" />
    </Col>
  </Row>
</Form>
  </Card.ImgOverlay>
</Card>       
</div>
    )
}
export default Searchbar;