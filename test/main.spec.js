const source = require('../src');
const Grade = require('../src/types/grade');

describe('Main', () => {
  test('should return the sum of those 4 numbers passed as argument', () => {
    const result = source.sum(2, 4, 1, 5);

    expect(result).toBe(12);
  });

  test('should return the sum of those 5 numbers which includes negative numbers', () => {
    const result = source.sum(-1, 2, 5, -3, 7);

    expect(result).toBe(10);
  });

  test('should return the sum of a unique parameter', () => {
    const result = source.sum(2);

    expect(result).toBe(2);
  });

  test('should return the average of those 4 numbers passed as argument', () => {
    const result = source.average(2, 4, 1, 5);

    expect(result).toBe(3);
  });

  test('should return the average of those 5 numbers which includes negative numbers', () => {
    const result = source.average(-1, 2, 5, -3, 7);

    expect(result).toBe(2);
  });

  test('should return the weighted average of those 2 numbers passed as argument', () => {
    const grades = [];
    grades.push(new Grade(7, 10));
    grades.push(new Grade(8, 8));

    const result = source.weightedAverage(grades);

    expect(result).toBe(67);
  });

  test('should return the average of those 3 numbers', () => {
    const grades = [];
    grades.push(new Grade(10, 9));
    grades.push(new Grade(8, 10));
    grades.push(new Grade(7, 6));

    new Grade();

    const result = source.weightedAverage(grades);

    expect(result).toBe(70.66666666666667);
  });
});
