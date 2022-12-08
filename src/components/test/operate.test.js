import operate from '../Calculator/logic.js/operate';

describe('Operate test cases', () => {
  test('expect addition 5 and 6 to be 11', () => {
    const num1 = 5;
    const num2 = 6;
    const operation = '+';
    const output = '11';
    const assert = operate(num1, num2, operation);
    expect(assert).toBe(output);
  });

  test('expect subtraction of 3 and 4 to be -1', () => {
    const num1 = 3;
    const num2 = 4;
    const operation = '-';
    const output = '-1';
    const assert = operate(num1, num2, operation);
    expect(assert).toBe(output);
  });

  test('expect multiplication of 5 and 6 to be 30', () => {
    const num1 = 5;
    const num2 = 6;
    const operation = 'x';
    const output = '30';
    const assert = operate(num1, num2, operation);
    expect(assert).toBe(output);
  });

  test('expect division of 11 by 4 to be 3', () => {
    const num1 = 11;
    const num2 = 4;
    const operation = '%';
    const output = '3';
    const assert = operate(num1, num2, operation);
    expect(assert).toBe(output);
  });

  test('expect division of 12 by 4 to be 3', () => {
    const num1 = 12;
    const num2 = 4;
    const operation = '÷';
    const output = '3';
    const assert = operate(num1, num2, operation);
    expect(assert).toBe(output);
  });

  test("expect division of 5 and 0 to be 'Can't divide by 0.'", () => {
    const num1 = 5;
    const num2 = 0;
    const operation = '÷';
    const output = "Can't divide by 0.";
    const assert = operate(num1, num2, operation);
    expect(assert).toBe(output);
  });
});
