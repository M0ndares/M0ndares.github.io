class InterNewton {
  constructor(xArray, yArray) {
    this.xArray = xArray;
    this.yArray = yArray;
  }

  calculate() {
    if (this.xArray.length !== this.yArray.length) return 'Se deben de proporcionar la misma cantidad de valores para x y para y';
    const n = this.xArray.length;
    const table = []; 
    for (let i = 0; i < n; i++) {
      table[i] = [this.yArray[i]];  
    }

    for (let j = 1; j < n; j++) {
      for (let i = 0; i < n - j; i++) {
        const diff = (table[i + 1][j - 1] - table[i][j - 1]) / (this.xArray[i + j] - this.xArray[i]);
        table[i].push(diff);  
      }
    }
    return table; 
  }

  evaluate(x) {
    const table = this.calculate();
    let result = table[0][0];  
    let product = 1;
    for (let i = 1; i < this.xArray.length; i++) {
      product *= (x - this.xArray[i - 1]);  
      result += table[0][i] * product;  
    }
    return result;  
  }

  getDividedDifferenceTable() {
    return this.calculate();
  }
}

const interA = new InterNewton([3, 4, 5], [4, 3]);
const interB = new InterNewton([6, 9, 13, 17], [12, 18, 24, 20]);
console.log(interA.calculate());
console.log(interB.calculate());
console.log(interB.evaluate(7.5));
console.log(interB.getDividedDifferenceTable())