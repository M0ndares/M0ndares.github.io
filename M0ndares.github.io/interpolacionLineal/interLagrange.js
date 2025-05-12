class InterpolationLagrange {
    constructor(xArray, yArray) {
        this.xArray = xArray;
        this.yArray = yArray;
    }

    // Método para calcular el polinomio de interpolación de Lagrange
    calculatePolynomial() {
        if (this.xArray.length !== this.yArray.length) {
            return "Los arreglos X y Y deben tener el mismo tamaño.";
        }

        let n = this.xArray.length;
        let polynomial = 0;

        // Itera sobre cada punto para calcular los términos L_i(x) y y_i * L_i(x)
        for (let i = 0; i < n; i++) {
            let term = this.yArray[i]; // Empezamos con y_i
            let L_i = 1;

            // Calculamos el término L_i(x) multiplicando los factores para cada j
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    L_i *= (x - this.xArray[j]) / (this.xArray[i] - this.xArray[j]);
                }
            }

            // Sumamos el término y_i * L_i(x) al polinomio total
            polynomial += term * L_i;
        }

        return polynomial;
    }
}

function calculateInterpolation() {
    // Obtener los valores de los inputs y convertirlos en arreglos
    let xArray = document.getElementById("xArray").value.split(';').map(Number);
    let yArray = document.getElementById("yArray").value.split(';').map(Number);

    // Validación: asegurarse de que ambos arreglos tengan el mismo tamaño
    if (xArray.length !== yArray.length) {
        document.getElementById("resultLabel").innerText = "Los arreglos X y Y deben tener el mismo tamaño.";
        return;
    }

    // Crear una instancia de la clase InterpolationLagrange
    let interpolation = new InterpolationLagrange(xArray, yArray);

    // Calcular el polinomio de interpolación
    let polynomial = interpolation.calculatePolynomial();

    // Mostrar el resultado en el label con id="resultLabel"
    document.getElementById("resultLabel").innerText = `La ecuación del polinomio es: ${polynomial}`;
}