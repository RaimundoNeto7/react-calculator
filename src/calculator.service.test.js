import React from 'react'
import ReactDOM from 'react-dom'

import CalculatorService from './calculator.service'

describe('CalculatorService sum test', () => {
    const [calculate] = CalculatorService()

    it('should garanteed with 1 + 4 = 5', () => {
        const sum = calculate(1, 4, '+')

        expect(sum).toEqual(5)
    })

    it('should garanteed with 2 + 10 = 12', () => {
        const sum = calculate(2, 10, '+')
        
        expect(sum).toEqual(12)
    })
})

describe('CalculatorService subtraction test', () => {
    const [calculate] = CalculatorService()

    it('should garanteed with 10 - 4 = 6', () => {
        const sub = calculate(10, 4, '-')

        expect(sub).toEqual(6)
    })
})