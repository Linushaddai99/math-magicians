import calculate from '../Calculator/logic.js/calculate';

describe('Calculate test cases', () => {
  test('expect object with total:2, next:5 and operation:+ to be total: 7, operation: null, next: null', () => {
    const obj = {
      total: '2',
      next: '5',
      operation: '+',
    };
    const buttonName = '=';
    const output = {
      total: '7',
      next: null,
      operation: null,
    };
    const assert = calculate(obj, buttonName);
    expect(assert).toStrictEqual(output);
  });

  test('expect object with total:5, next:2 and operation:+ to be total: 7, operation: +, next: null', () => {
    const obj = {
      total: '2',
      next: '5',
      operation: '+',
    };
    const buttonName = '+';
    const output = {
      total: '7',
      next: null,
      operation: '+',
    };
    const assert = calculate(obj, buttonName);
    expect(assert).toStrictEqual(output);
  });

  test('expect object with values total:9 , next:null, operation:null to be all null', () => {
    const obj = {
      total: '9',
      next: null,
      operation: null,
    };
    const buttonName = 'AC';
    const output = {
      total: null,
      next: null,
      operation: null,
    };
    const assert = calculate(obj, buttonName);
    expect(assert).toStrictEqual(output);
  });

  test('expect object with values total:9 , next:null, operation:null to be total: -9', () => {
    const obj = {
      total: '9',
      next: null,
      operation: null,
    };
    const buttonName = '+/-';
    const output = {
      total: '-9',
      next: null,
      operation: null,
    };
    const assert = calculate(obj, buttonName);
    expect(assert).toStrictEqual(output);
  });

  test('expect object with values total:9 , next:-2, operation:null to be total:9, next: 2', () => {
    const obj = {
      total: '9',
      next: '-2',
      operation: '%',
    };
    const buttonName = '+/-';
    const output = {
      total: '9',
      next: '2',
      operation: '%',
    };
    const assert = calculate(obj, buttonName);
    expect(assert).toStrictEqual(output);
  });
});
