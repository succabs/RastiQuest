import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function Navbar() {
    return (

        <div className="container-fluid p-3">
        <Form>


        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter the link"
          aria-label="Link to the quest"
          aria-describedby="basic-addon2"
        />
        <Button variant="primary" type="submit" id="button-addon2">
          Button
        </Button>
      </InputGroup>

      </Form>
      </div>
        );
}