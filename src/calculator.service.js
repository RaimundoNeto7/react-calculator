function CalculatorService() {
    function calculate(a, b, operation){
        switch (operation) {
            case '+' :
                return a + b 
            case '-' :
                return a - b
        }
        return a + b
    }

    return [calculate]
}

export default CalculatorService