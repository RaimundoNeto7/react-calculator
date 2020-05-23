import React, { useState } from 'react';
import './calculator.css';

import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap'
import CalculatorService from './calculator.service'

function Calculator() {

  const [calculate, validateButton, SUM, SUB, MULT, DIV, DOT] = CalculatorService()
  const [displayResult, setDisplayResult] = useState('0')

  const [operatorA, setOperatorA] = useState('0')
  const [operatorB, setOperatorB] = useState(null)
  const [operation, setOperation] = useState(null)

  function addNumber(number) {
    let result;
    if(operation === null){
      result = validateButton(number, operatorA)
      setOperatorA(result)
    }
    else{
      result = validateButton(number, operatorB)
      setOperatorB(result)
    }
    setDisplayResult(result)
  }

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
            className='text-right'
            readOnly='readOnly'
            value={displayResult}/>
          </Col>
        </Row>

        <Row>
          <Col xs='3'>
            <Button 
              variant='light'
              onClick={() => addNumber('7')}>7</Button>
          </Col>
          <Col xs='3'>
            <Button variant='light'
            onClick={() => addNumber('8')}>8</Button>
          </Col>
          <Col xs='3'>
            <Button variant='light'
            onClick={() => addNumber('9')}>9</Button>
          </Col>
          <Col xs='3'>
            <Button variant='warning'>/</Button>
          </Col>
        </Row>

        <Row>
          <Col xs='3'>
            <Button variant='light'
            onClick={() => addNumber('4')}>4</Button>
          </Col>
          <Col xs='3'>
            <Button variant='light'
            onClick={() => addNumber('5')}>5</Button>
          </Col>
          <Col xs='3'>
            <Button variant='light'
            onClick={() => addNumber('6')}>6</Button>
          </Col>
          <Col xs='3'>
            <Button variant='warning'>*</Button>
          </Col>
        </Row>

        <Row>
          <Col xs='3'>
            <Button variant='light'
            onClick={() => addNumber('1')}>1</Button>
          </Col>
          <Col xs='3'>
            <Button variant='light'
            onClick={() => addNumber('2')}>2</Button>
          </Col>
          <Col xs='3'>
            <Button variant='light'
            onClick={() => addNumber('3')}>3</Button>
          </Col>
          <Col xs='3'>
            <Button variant='warning'>-</Button>
          </Col>
        </Row>

        <Row>
          <Col xs='3'>
            <Button variant='light'>.</Button>
          </Col>
          <Col xs='3'>
            <Button variant='light'
            onClick={() => addNumber('0')}>0</Button>
          </Col>
          <Col xs='3'>
            <Button variant='success'>=</Button>
          </Col>
          <Col xs='3'>
            <Button variant='warning'>+</Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculator;
