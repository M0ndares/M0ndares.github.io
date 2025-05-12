import {getAmount} from '../src/app'; // Asegúrate de que la ruta sea correcta

describe('Pruebas de getAmount', () => {
  // Caso 1: Cliente con más de 5 años de antigüedad y monto >= 100 (descuento del 15%)
  it('Debe regresar 18 para un totalAmount de 120 y seniority de 6', () => {
    expect(getAmount(120, 6)).toBe(18); // 15% de descuento de $120
  });

  // Caso 2: Cliente con más de 5 años de antigüedad y monto < 100 (sin descuento)
  it('Debe regresar 0 para un totalAmount de 80 y seniority de 6', () => {
    expect(getAmount(80, 6)).toBe(0); // No aplica descuento
  });

  // Caso 3: Cliente con entre 1 y 5 años de antigüedad y monto >= 50 (descuento del 10%)
  it('Debe regresar 5 para un totalAmount de 50 y seniority de 3', () => {
    expect(getAmount(50, 3)).toBe(5); // 10% de descuento de $50
  });

  // Caso 4: Cliente con entre 1 y 5 años de antigüedad y monto < 50 (sin descuento)
  it('Debe regresar 0 para un totalAmount de 40 y seniority de 4', () => {
    expect(getAmount(40, 4)).toBe(0); // No aplica descuento
  });

  // Caso 5: Cliente con menos de 1 año de antigüedad (sin descuento)
  it('Debe regresar 0 para un totalAmount de 100 y seniority de 0', () => {
    expect(getAmount(100, 0)).toBe(0); // No aplica descuento
  });

  // Caso 6: Cliente con 1 año de antigüedad y monto justo en el límite (descuento del 10%)
  it('Debe regresar 10 para un totalAmount de 100 y seniority de 1', () => {
    expect(getAmount(100, 1)).toBe(10); // 10% de descuento de $100
  });

  // Caso 7: Cliente con más de 5 años de antigüedad y monto justo en el límite (descuento del 15%)
  it('Debe regresar 15 para un totalAmount de 100 y seniority de 6', () => {
    expect(getAmount(100, 6)).toBe(15); // 15% de descuento de $100
  });

  // Caso 8: Cliente con 5 años de antigüedad y monto justo en el límite (sin descuento)
  it('Debe regresar 5 para un totalAmount de 50 y seniority de 5', () => {
    expect(getAmount(50, 5)).toBe(5); // No aplica descuento
  });
});
