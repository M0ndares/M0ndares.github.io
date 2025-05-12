import {getDiscount} from '../src/app';

describe('Prueba de getDiscount', () => {
  // Caso 1: Monto mayor o igual a $50 en temporada de rebajas (10% de descuento)
  it('getDiscount(60, true): debe regresar 10', () => {
    expect(getDiscount(60, true)).toBe(10); // Monto mayor a $50 y en rebajas
  });

  // Caso 2: Monto igual a $50 en temporada de rebajas (10% de descuento)
  it('getDiscount(50, true): debe regresar 10', () => {
    expect(getDiscount(50, true)).toBe(10); // Monto igual a $50 y en rebajas
  });

  // Caso 3: Monto menor a $50 en temporada de rebajas (sin descuento)
  it('getDiscount(40, true): debe regresar 0', () => {
    expect(getDiscount(40, true)).toBe(0); // Monto menor a $50 y en rebajas
  });

  // Caso 4: Monto mayor a $50 fuera de temporada de rebajas (sin descuento)
  it('getDiscount(60, false): debe regresar 0', () => {
    expect(getDiscount(60, false)).toBe(0); // Monto mayor a $50 pero sin rebajas
  });

  // Caso 5: Monto menor a $50 fuera de temporada de rebajas (sin descuento)
  it('getDiscount(40, false): debe regresar 0', () => {
    expect(getDiscount(40, false)).toBe(0); // Monto menor a $50 y sin rebajas
  });
});
