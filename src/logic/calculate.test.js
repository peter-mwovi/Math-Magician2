import calculate from './calculate';

const testObj1 = {
  total: 100,
  next: '2.',
  operation: 'x',
};

const testObj2 = {
  total: '200',
  next: null,
  operation: null,
};

const testObj3 = {
  total: null,
  next: null,
  operation: null,
};

const testObj4 = {
  total: 100,
  next: '-2',
  operation: 'x',
};

const testObj5 = {
  total: 100,
  next: '2.',
  operation: 'x',
};

describe('Testing calculate function', () => {
  test('Test AC button', () => {
    expect(calculate(testObj1, 'AC')).toEqual(testObj3);
    expect(calculate(testObj2, 'AC')).toEqual(testObj3);
  });
  test('Test = button', () => {
    expect(calculate(testObj1, '=')).toEqual(testObj2);
  });
  test('Test +/- button', () => {
    expect(calculate(testObj1, '+/-')).toEqual(testObj4);
  });
  test('Test . button', () => {
    expect(calculate(testObj1, '.')).toEqual(testObj5);
  });
});
