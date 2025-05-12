import {calculateTax} from '../src/app'; // Asegúrate de que la ruta sea correcta

describe('Pruebas de calculateTax', () => {
  // Caso 1: Producto exento de impuestos
  it('debe regresar 0 para calculateTax(1000, true, false, new Date(2024, 0, 5))', () => {
    expect(calculateTax(1000, true, false, new Date(2024, 0, 5))).toBe(0); // Exento de impuestos
  });

  // Caso 2: Monto mayor a $5000, no exento, no lujo, en viernes
  it('debe regresar 720 para calculateTax(6000, false, false, new Date(2024, 0, 5))', () => {
    expect(calculateTax(6000, false, false, new Date(2024, 0, 5))).toBe(720); // 10% + 2%
  });

  // Caso 3: Monto mayor a $5000, no exento, lujo, en sábado
  it('debe regresar 900 para calculateTax(6000, false, true, new Date(2024, 0, 6))', () => {
    expect(calculateTax(6000, false, true, new Date(2024, 0, 6))).toBe(900); // 10% + 2% + 3%
  });

  // Caso 4: Monto menor o igual a $5000, no exento, no lujo, en domingo
  it('debe regresar 140 para calculateTax(2000, false, false, new Date(2024, 0, 7))', () => {
    expect(calculateTax(2000, false, false, new Date(2024, 0, 7))).toBe(140); // 5% + 2%
  });

  // Caso 5: Monto menor o igual a $5000, no exento, lujo, en sábado
  it('debe regresar 200 para calculateTax(2000, false, true, new Date(2024, 0, 6))', () => {
    expect(calculateTax(2000, false, true, new Date(2024, 0, 6))).toBe(200); // 5% + 2% + 3%
  });

  // Caso 6: Monto menor o igual a $5000, no exento, lujo, en lunes
  it('debe regresar 160 para calculateTax(2000, false, true, new Date(2024, 0, 8))', () => {
    expect(calculateTax(2000, false, true, new Date(2024, 0, 8))).toBe(160); // 5% + 3%
  });

  // Caso 7: Monto mayor a $5000, no exento, lujo, en viernes
  it('debe regresar 1050 para calculateTax(7000, false, true, new Date(2024, 0, 5))', () => {
    expect(calculateTax(7000, false, true, new Date(2024, 0, 5))).toBe(1050); // 10% + 2% + 3%
  });

  // Caso 8: Monto mayor a $5000, no exento, en jueves
  it('debe regresar 600 para calculateTax(6000, false, false, new Date(2024, 0, 4))', () => {
    expect(calculateTax(6000, false, false, new Date(2024, 0, 4))).toBe(600); // 10%
  });

  // Caso 9: Monto igual a $5000, no exento, lujo, en miércoles
  it('debe regresar 400 para calculateTax(5000, false, true, new Date(2024, 0, 3))', () => {
    expect(calculateTax(5000, false, true, new Date(2024, 0, 3))).toBe(400); // 5% + 3%
  });

  // Caso 10: Monto igual a $5000, no exento, no lujo, en martes
  it('debe regresar 250 para calculateTax(5000, false, false, new Date(2024, 0, 2))', () => {
    expect(calculateTax(5000, false, false, new Date(2024, 0, 2))).toBe(250); // 5%
  });
});
