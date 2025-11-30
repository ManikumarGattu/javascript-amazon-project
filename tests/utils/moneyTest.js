import {formatCurrency} from '../../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
  it('converts cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds correctly', () => {
    expect(formatCurrency(1999.99)).toEqual('20.00');
  });

  it('handles negative values', () => {
    expect(formatCurrency(-500)).toEqual('-5.00');
  });

  it('handles large values', () => {
    expect(formatCurrency(123456789)).toEqual('1234567.89');
  });

  it('handles less than one dollar', () => {
    expect(formatCurrency(50.5)).toEqual('0.51');
  });

  it('handles rounding down', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
});