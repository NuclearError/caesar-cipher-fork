import { caesarCipher } from './caesarCipher';

describe('caesarCipher', () => {
  test('Encrypts forwards', () => {
    expect(caesarCipher('abcde', 3, 'forward')).toBe('defgh');
  });

  test('Encrypts backwards', () => {
    expect(caesarCipher('abcde', 3, 'backward')).toBe('xyzab');
  });

  test('Ignores numbers and special characters', () => {
    expect(caesarCipher('abcde! 123, lorem ipsum', 3, 'forward')).toBe('defgh! 123, oruhp lsvxp');
  });

});
