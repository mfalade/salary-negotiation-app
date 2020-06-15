import capitalize from '../capitalize';

describe('capitalize', () => {
  it('should return an empty string given a falsey value', () => {
    expect(capitalize('')).toBe('');
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
  });

  it('should capitalize given string', () => {
    expect(capitalize('F')).toBe('F');
    expect(capitalize('Fo')).toBe('Fo');
    expect(capitalize('FOO')).toBe('Foo');
    expect(capitalize('foo')).toBe('Foo');
    expect(capitalize('000')).toBe('000');
  });
});
