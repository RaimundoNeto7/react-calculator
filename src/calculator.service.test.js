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

    it('should garanteed with 4 - 10 = -6', () => {
        const sub = calculate(4, 10, '-')

        expect(sub).toEqual(-6)
    })
})

describe('CalculatorService multiplication test', () => {
    const [calculate] = CalculatorService()

    it('should garanteed with 2 * 6 = 12', () => {
        const mult = calculate(2, 6, '*')

        expect(mult).toEqual(12)
    })

    it('should garanteed with 6 * 2 = 12', () => {
        const mult = calculate(6, 2, '*')

        expect(mult).toEqual(12)
    })

    it('should garanteed with 2 * 0 = 0', () => {
        const mult = calculate(2, 0, '*')

        expect(mult).toEqual(0)
    })
})

describe('CalculatorService division test', () => {
    const [calculate] = CalculatorService()

    it('should garanteed with 2 / 6 = 12', () => {
        const div = calculate(2, 6, '/')

        expect(div).toEqual(1/3)
    })

    it('should garanteed with 0 / 1 = 0', () => {
        const div = calculate(0, 1, '/')

        expect(div).toEqual(0)
    })

    it('should garanteed with 1 / 0 is a NaN', () => {
        const div = calculate(1, 0, '/')

        expect(div).toEqual('NaN')
    })
})

describe('CalculatorService validate button test', () => {
    const [validateButton] = CalculatorService()
    
    it('should garanteed if has dot(.) then dotButton will return a current value', () => {
        const dotButton = validateButton('.', 0.6)

        expect(dotButton).toEqual(0.6)
    })
})