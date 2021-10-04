import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';

const SearchYear = (props) => {

    return(
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{props.heading}</Form.Label>
    <Form.Control 
    type="text" 
    value={props.value} 
    onChange={(event) =>props.setSearchYear(event.target.value)} 
    placeholder="Type to search.." />
  </Form.Group>
  
</Form>
    )
}
export default SearchYear;