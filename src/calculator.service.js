function CalculatorService() {
    
    function calculate(a, b, operation){
        switch (operation) {
            case '+' :
                return a + b 
            case '-' :
                return a - b
            case '*' :
                return a * b
            case '/' :
                if(b === 0 || b === 0.0){
                    return 'NaN'
                }
                return a / b
        }
    }

    function validateButton(button, currentValue){
        switch (button) {
            case '.' : {
                if(currentValue.indexOf('.') === -1){
                    return currentValue + '.'
                }
                return currentValue
            }
        }
    }

    return [calculate, validateButton]
}

export default CalculatorService