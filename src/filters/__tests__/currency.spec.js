import currency from '../currency';

describe('currency', () => {
  it('should return an empty string for undefined and null', () => {
    expect(currency(null)).toBe('');
    expect(currency(undefined)).toBe('');
  });

  it('should properly format given value', () => {
    expect(currency(0)).toContain('0,00');
    expect(currency(42)).toContain('42,00');
    expect(currency(4200)).toContain('4.200,00');
    expect(currency(4200000)).toContain('4.200.000,00');
  });
});
