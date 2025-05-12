class Interpolation {
    x1Value;
    x2Value;
    y1Value;
    y2Value;

    constructor(x1Value, y1Value, x2Value, y2Value) {
        this.x1Value = x1Value;
        this.y1Value = y1Value;
        this.x2Value = x2Value;
        this.y2Value = y2Value;
    }

    calculateM() {
        return (this.y2Value - this.y1Value) / (this.x2Value - this.x1Value);
    }

    calculateY(givenX) {
        return ((this.calculateM() * (givenX - this.x1Value)) + this.y1Value);
    }
}

function calculateInterpolation() {
    let xArray = document.getElementById("xArrayLineal").value.split(';').map(Number);
    let yArray = document.getElementById("yArrayLineal").value.split(';').map(Number);
    let givenX = parseFloat(document.getElementById("givenXForLineal").value);
    
    if (xArray.length !== 2 || yArray.length !== 2) {
        alert("Por favor, ingrese exactamente dos valores para X y Y.");
        return;
    }

    let interpolation = new Interpolation(xArray[0], yArray[0], xArray[1], yArray[1]); 
    let result = interpolation.calculateY(givenX);
    document.getElementById("resultForLineal").innerText = "El valor interpolado es: " + result;
}