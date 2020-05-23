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

  function clickButton(button) {
    let result;
    if(operation === null){
      if(button === '+' || button === '-' || button === '*' || button === '/'){
        setOperation(button)
        result = validateButton(button, operatorA)
      }
      else{
        result = validateButton(button, operatorA)
        setOperatorA(result)
      }
    }
    else {
      result = validateButton(button, operatorB)
      setOperatorB(result)
    }
    setDisplayResult(result)
  }

  const equalButton = () => {
    if(operatorB !== null){
      const result = calculate(parseFloat(operatorA), parseFloat(operatorB), operation)
      setOperatorA(result.toString())
      setOperatorB(null)
      setOperation(null)
      setDisplayResult(result.toString())
    }
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
              onClick={() => clickButton('7')}>7</Button>
          </Col>
          <Col xs='3'>
            <Button variant='light'
            onClick={() => clickButton('8')}>8</Button>
          </Col>
          <Col xs='3'>
            <Button variant='light'
            onClick={() => clickButton('9')}>9</Button>
          </Col>
          <Col xs='3'>
            <Button variant='warning'
            onClick={() => clickButton(DIV)}>/</Button>
          </Col>
        </Row>

        <Row>
          <Col xs='3'>
            <Button variant='light'
            onClick={() => clickButton('4')}>4</Button>
          </Col>
          <Col xs='3'>
            <Button variant='light'
            onClick={() => clickButton('5')}>5</Button>
          </Col>
          <Col xs='3'>
            <Button variant='light'
            onClick={() => clickButton('6')}>6</Button>
          </Col>
          <Col xs='3'>
            <Button variant='warning'
            onClick={() => clickButton(MULT)}>*</Button>
          </Col>
        </Row>

        <Row>
          <Col xs='3'>
            <Button variant='light'
            onClick={() => clickButton('1')}>1</Button>
          </Col>
          <Col xs='3'>
            <Button variant='light'
            onClick={() => clickButton('2')}>2</Button>
          </Col>
          <Col xs='3'>
            <Button variant='light'
            onClick={() => clickButton('3')}>3</Button>
          </Col>
          <Col xs='3'>
            <Button variant='warning'
            onClick={() => clickButton(SUB)}>-</Button>
          </Col>
        </Row>

        <Row>
          <Col xs='3'>
            <Button variant='light'
            onClick={() => clickButton('.')}>.</Button>
          </Col>
          <Col xs='3'>
            <Button variant='light'
            onClick={() => clickButton('0')}>0</Button>
          </Col>
          <Col xs='3'>
            <Button variant='success'
            onClick={() => equalButton()}>=</Button>
          </Col>
          <Col xs='3'>
            <Button variant='warning'
            onClick={() => clickButton(SUM)}>+</Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculator;
