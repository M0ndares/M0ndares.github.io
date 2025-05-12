import {isInRange} from '../src/app'; // Asegúrate de que la ruta sea correcta

describe('Pruebas de isInRange', () => {
  // Caso 1: Número dentro del rango
  it('debe regresar true para isInRange(5, 1, 10)', () => {
    expect(isInRange(5, 1, 10)).toBe(true); // 5 está entre 1 y 10
  });

  // Caso 2: Número igual al límite inferior
  it('debe regresar true para isInRange(1, 1, 10)', () => {
    expect(isInRange(1, 1, 10)).toBe(true); // 1 está en el límite inferior
  });

  // Caso 3: Número igual al límite superior
  it('debe regresar true para isInRange(10, 1, 10)', () => {
    expect(isInRange(10, 1, 10)).toBe(true); // 10 está en el límite superior
  });

  // Caso 4: Número fuera del rango, menor que el límite inferior
  it('debe regresar false para isInRange(0, 1, 10)', () => {
    expect(isInRange(0, 1, 10)).toBe(false); // 0 está fuera del rango
  });

  // Caso 5: Número fuera del rango, mayor que el límite superior
  it('debe regresar false para isInRange(11, 1, 10)', () => {
    expect(isInRange(11, 1, 10)).toBe(false); // 11 está fuera del rango
  });

  // Caso 6: Rango invertido (start mayor que end)
  it('debe regresar false para isInRange(5, 10, 1)', () => {
    expect(isInRange(5, 10, 1)).toBe(false); // Rango inválido
  });

  // Caso 7: Número igual a start en un rango invertido
  it('debe regresar false para isInRange(10, 1, 1)', () => {
    expect(isInRange(10, 1, 1)).toBe(false); // Rango inválido
  });

  // Caso 8: Rango donde start y end son iguales
  it('debe regresar true para isInRange(5, 5, 5)', () => {
    expect(isInRange(5, 5, 5)).toBe(true); // 5 está exactamente en el rango
  });
});
