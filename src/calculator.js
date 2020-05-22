import React from 'react';
import './calculator.css';

import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap'

function Calculator() {
  return (
    <Jumbotron style={
      {
        background: 'transparent !important',
        backgroundColor: '#007bff',
        padding: '5px',
        margin: '10px',
        width: '400px'
      }
    }>
      <Container>
        <Row>
          <Col xs='3'>
            <Button variant='danger'>C</Button>
          </Col>

          <Col xs='9'>
            <Form.Control type='text'
            name='display'
            class='text-right'
            readOnly='readOnly'/>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculator;
