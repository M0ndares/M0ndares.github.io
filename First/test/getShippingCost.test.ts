import {getShippingCost} from '../src/app'; // Asegúrate de que la ruta sea correcta

describe('Pruebas de getShippingCost', () => {
  // Caso 1: Envío gratis por precio alto en miércoles
  it('debe regresar 0 para getShippingCost(600, 200, false, new Date(2024, 0, 3))', () => {
    expect(getShippingCost(600, 200, false, new Date(2024, 0, 3))).toBe(0); // Miércoles, precio > 500
  });

  // Caso 2: Envío gratis por membresía premium en miércoles
  it('debe regresar 0 para getShippingCost(400, 300, true, new Date(2024, 0, 3))', () => {
    expect(getShippingCost(400, 300, true, new Date(2024, 0, 3))).toBe(0); // Miércoles, membresía premium
  });

  // Caso 3: Costo regular en lunes sin descuentos
  it('debe regresar 100 para getShippingCost(200, 200, false, new Date(2024, 0, 1))', () => {
    expect(getShippingCost(200, 200, false, new Date(2024, 0, 1))).toBe(100); // Lunes, costo regular
  });

  // Caso 4: Costo con descuento del 10% en lunes para premium
  it('debe regresar 90 para getShippingCost(200, 200, true, new Date(2024, 0, 1))', () => {
    expect(getShippingCost(200, 200, true, new Date(2024, 0, 1))).toBe(90); // Lunes, premium con descuento
  });

  // Caso 5: Costo regular en jueves sin descuentos
  it('debe regresar 150 para getShippingCost(300, 300, false, new Date(2024, 0, 4))', () => {
    expect(getShippingCost(300, 300, false, new Date(2024, 0, 4))).toBe(150); // Jueves, costo regular
  });

  // Caso 6: Costo con descuento del 10% en jueves para premium
  it('debe regresar 135 para getShippingCost(300, 300, true, new Date(2024, 0, 4))', () => {
    expect(getShippingCost(300, 300, true, new Date(2024, 0, 4))).toBe(135); // Jueves, premium con descuento
  });

  // Caso 7: Costo regular con distancia mayor a 500 km
  it('debe regresar 450 para getShippingCost(200, 600, false, new Date(2024, 0, 1))', () => {
    expect(getShippingCost(200, 600, false, new Date(2024, 0, 1))).toBe(450); // Costo elevado por distancia
  });

  // Caso 8: Costo regular con distancia mayor a 500 km y premium
  it('debe regresar 405 para getShippingCost(200, 600, true, new Date(2024, 0, 1))', () => {
    expect(getShippingCost(200, 600, true, new Date(2024, 0, 1))).toBe(405); // Premium con descuento
  });

  // Caso 9: Costo regular sin descuentos
  it('debe regresar 50 para getShippingCost(100, 100, false, new Date(2024, 0, 5))', () => {
    expect(getShippingCost(100, 100, false, new Date(2024, 0, 5))).toBe(50); // Costo normal
  });

  // Caso 10: Envío gratis por premium en miércoles
  it('debe regresar 0 para getShippingCost(500, 600, true, new Date(2024, 0, 3))', () => {
    expect(getShippingCost(500, 600, true, new Date(2024, 0, 3))).toBe(0); // Miércoles, premium
  });
});
