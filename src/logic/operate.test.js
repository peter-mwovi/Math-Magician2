import operate from './operate';

describe('Testing math operations', () => {
  // Sum testing
  test('Sum testing', () => {
    expect(operate(20, 30, '+')).toEqual('50');
    expect(operate(20, -30, '+')).toEqual('-10');
    expect(operate(-5, -10, '+')).toEqual('-15');
  });

  // Subtraction testing
  test('Subtraction testing', () => {
    expect(operate(20, 30, '-')).toEqual('-10');
    expect(operate(20, -30, '-')).toEqual('50');
    expect(operate(-5, -10, '-')).toEqual('5');
  });

  // Multiplication testing
  test('Multiplication testing', () => {
    expect(operate(20, 30, 'x')).toEqual('600');
    expect(operate(20, -30, 'x')).toEqual('-600');
    expect(operate(-5, -10, 'x')).toEqual('50');
  });

  test('Division testing', () => {
    expect(operate(21, 3, '÷')).toEqual('7');
    expect(operate(64, -8, '÷')).toEqual('-8');
    expect(operate(-100, -25, '÷')).toEqual('4');
  });

  test('Module testing', () => {
    expect(operate(3, 2, '%')).toEqual('1');
    expect(operate(10, 5, '%')).toEqual('0');
    expect(operate(11, 8, '%')).toEqual('3');
  });
});
