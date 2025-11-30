import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suite : formatCurrency');

console.log('converts cents into dollers');

if (formatCurrency(2095) === '20.95') {
  console.log('formatCurrency test passed');
} else {
  console.error('formatCurrency test failed');
}

console.log('works with 0');

if (formatCurrency(0) === '0.00') {
  console.log('formatCurrency test passed for zero'); 
} else {
  console.error('formatCurrency test failed for zero');
}

console.log('rounds correctly');

if (formatCurrency(1999.99) === '20.00') {
  console.log('formatCurrency test passed for rounding');
} else {
  console.error('formatCurrency test failed for rounding');
}

console.log('handles negative values');

if (formatCurrency(-500) === '-5.00') {
  console.log('formatCurrency test passed for negative values');
} else {
  console.error('formatCurrency test failed for negative values');
}

console.log('additional tests');

if (formatCurrency(123456789) === '1234567.89') {
  console.log('formatCurrency test passed for large values');
} else {
  console.error('formatCurrency test failed for large values');
}

console.log('handles less than one dollar');

if (formatCurrency(50.5) === '0.51') {
  console.log('formatCurrency test passed for less than one dollar');
} else {
  console.error('formatCurrency test failed for less than one dollar');
}

console.log('handles rounding down');

if (formatCurrency(2000.5) === '20.01') {
  console.log('formatCurrency test passed for rounding down');
} else {
  console.error('formatCurrency test failed for rounding down');
}
