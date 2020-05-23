import React from 'react'
import ReactDOM from 'react-dom'

import CalculatorService from './calculator.service'

const [calculate, validateButton] = CalculatorService()

describe('CalculatorService sum test', () => {
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

describe('CalculatorService validate dotButton test', () => {
    it('should garanteed if no has dot(.), will return current value and dot(.)', () => {
        const dotButton = validateButton('.', '0')

        expect(dotButton).toEqual('0.')
    })

    it('should garanteed if no has dot(.), will return current value and dot(.)', () => {
        const dotButton = validateButton('.', '3')

        expect(dotButton).toEqual('3.')
    })
    
    it('should garanteed if has dot(.) then dotButton will return a current value', () => {
        const dotButton = validateButton('.', '0.6')

        expect(dotButton).toEqual('0.6')
    })

    it('should garanteed if has dot(.) then dotButton will return a current value', () => {
        const dotButton = validateButton('.', '320.632')

        expect(dotButton).toEqual('320.632')
    })

    it('should garanteed if has dot(.) then dotButton will return a current value', () => {
        const dotButton = validateButton('.', '0.')

        expect(dotButton).toEqual('0.')
    })
})

describe('CalculatorService validate number buttons test', () => {
    it('if the current value is "0" and any number button is clicked, return the number value', () => {
        const numberButton = validateButton('3', '0')

        expect(numberButton).toEqual('3')
    })

    it('if the current value is not "0" and any number button is clicked, return the current value concat number value', () => {
        const numberButton = validateButton('3', '3')

        expect(numberButton).toEqual('33')
    })

    it('if the current value is not "0" and any number button is clicked, return the current value concat number value', () => {
        const numberButton = validateButton('3', '3.')

        expect(numberButton).toEqual('3.3')
    })

    it('if the current value is not "0" and any number button is clicked, return the current value concat number value', () => {
        const numberButton = validateButton('3', '0.')

        expect(numberButton).toEqual('0.3')
    })
})

describe('CalculatorService validate click buttons', () => {
    it('if the current value is "0" and sum or sub operation button has clicked, return "0"', () => {
        const sumButton = validateButton('+', '0')
        expect(sumButton).toEqual('0')

        const subButton = validateButton('-', '0')
        expect(subButton).toEqual('0')
    })

    it('if the current value is "0" and mult or div operation button has clicked, return 0 and concat operation', () => {
        const sumButton = validateButton('*', '0')
        expect(sumButton).toEqual('0*')

        const subButton = validateButton('/', '0')
        expect(subButton).toEqual('0/')
    })

    it('if the operation has not yet been selected and current value is different "0", return the current value concatenated with the operation', () => {
        const operationSumButton = validateButton('+', '12')
        expect(operationSumButton).toEqual('12+')

        const operationSubButton = validateButton('-', '12')
        expect(operationSubButton).toEqual('12-')

        const operationMultButton = validateButton('*', '12')
        expect(operationMultButton).toEqual('12*')

        const operationDivButton = validateButton('/', '12')
        expect(operationDivButton).toEqual('12/')
    }) 
})