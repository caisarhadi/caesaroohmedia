// A simple utility function for testing
const sum = (a: number, b: number): number => a + b;

describe('Sum utility', () => {
  it('adds two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(0, 0)).toBe(0);
    expect(sum(-1, 1)).toBe(0);
  });
}); 