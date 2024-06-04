function console_log(message) {
  console.log(message);
}
function console_err(message) {
  try {
    console.error(message);
  } catch (error) {
    console.error('[ERROR]! ', error.message);
  }
}
function console_cnt(message) {
  console.count(message);
}
function console_warn(message) {
  console.warn(message);
}
function console_assert(assertion, errorMsg = 'assertion failed') {
  try {
    console.assert(assertion, errorMsg);
  } catch (error) {
    console.error('[FAILED] ' + errorMsg);
  }
}

class ArrayReverseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Array Reverse Error';
  }
}
/**
 * this function does the job only when array is palindrome
 * @param {} arr
 * @returns
 */
function reverseArray(arr) {
  for (let index = 0; index < arr.length; index++) {
    const temp = arr[index];
    arr[index] = arr[arr.length - index - 1];
    arr[arr.length - index - 1] = temp;
  }
  return arr;
}
/**
 * test if the function works
 * @param {} arr
 */
function test_reverseArray() {
  try {
    assert([5, 4, 3, 2, 1] == reverseArray([1, 2, 3, 4, 5]));
  } catch (error) {
    throw new ArrayReverseError('should be [5,4,3,2,1]');
  }
}
test_reverseArray();

window.onerror = function (mes, url, line, error) {
  console.error('Caught Error: ', mes, ' @ ', url);
  console.trace(error);
  return false;
};
