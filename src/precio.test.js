import { calcularSubtotal } from "./precio.js";

it("debería calcular correctamente el subtotal", () => {
  expect(calcularSubtotal(2, 50)).toBe(100);
});