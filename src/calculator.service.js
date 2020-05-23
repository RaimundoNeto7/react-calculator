function CalculatorService() {

    const SUM = '+'
    const SUB = '-'
    const MULT = '*'
    const DIV = '/'
    const DOT = '.'

    function calculate(a, b, operation){
        switch (operation) {
            case SUM :
                return a + b 
            case SUB :
                return a - b
            case MULT :
                return a * b
            case DIV :
                if(b === 0 || b === 0.0){
                    return 'NaN'
                }
                return a / b
        }
    }

    function validateButton(button, currentValue){
        switch (button) {
            case DOT : {
                if(currentValue.indexOf(DOT) === -1){
                    return currentValue + DOT
                }
                return currentValue
            }
            case SUM : 
            case SUB : {
                if(currentValue === '0'){
                    return currentValue
                }
            }
            case MULT :
            case DIV : {
                if(currentValue.indexOf(SUM) !== -1 || currentValue.indexOf(SUB) !== -1 || currentValue.indexOf(MULT) !== -1 || currentValue.indexOf(DIV) !== -1){
                    return currentValue
                }
                return currentValue + button
            }
            default: {
                if(currentValue !== '0' && currentValue !== null){
                    return currentValue + button
                }
                return button
            }
        }
    }

    return [calculate, validateButton, SUM, SUB, MULT, DIV, DOT]
}

export default CalculatorService