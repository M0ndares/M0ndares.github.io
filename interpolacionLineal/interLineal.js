class Interpolation {
    x1Value;
    y1Value;
    x2Value;
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
        return (((this.calculateM() *  (givenX - this.x1Value)) + this.y1Value));
    }
}

class DeterminationAndCorrelation {
    xPoints;
    yPoints;

    constructor(xPoints, yPoints) {
        this.xPoints = xPoints;
        this.yPoints = yPoints;
    }

    sumatoryX() {
        const sumatoryX = this.xPoints.map((currentX) => {
            
        })
    }
}

const example = new Interpolation (500, 35, 2500, 15);
console.log(example.calculateM());
console.log(example.calculateY(800));