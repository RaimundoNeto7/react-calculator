import React from 'react';
import './calculator.css';

import { Jumbotron } from 'react-bootstrap'

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
    </Jumbotron>
  );
}

export default Calculator;
