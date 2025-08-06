node {
    // Define parameters
    properties([
        parameters([
            string(name: 'NUM1', defaultValue: '0', description: 'Enter first number'),
            string(name: 'NUM2', defaultValue: '0', description: 'Enter second number')
        ])
    ])

    stage('Addition and Subtraction') {
        // Accessing parameters (always strings by default)
        def num1 = params.NUM1.toInteger()
        def num2 = params.NUM2.toInteger()

        def sum = num1 + num2
        def difference = num1 - num2

        echo "The sum of ${num1} and ${num2} is: ${sum}"
        echo "The difference of ${num1} and ${num2} is: ${difference}"
    }
}
