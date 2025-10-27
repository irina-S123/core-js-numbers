
 
 @param {number} width
 @param {number} height
 @return {number}
 
 @example:
  5, 10 => 50
  5, 5  => 25
 
function getRectangleArea(width, height) {
  return width * height;
}


  
  @param {number} radius
  @return {number}
 
  @example:
    5    => 31.41592653589793
    3.14 => 19.729201864543903
    0    => 0
 
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}


 
 
  @param {number} value1
  @param {number} value2
  @return {number}
 
  @example:
    5, 5  => 5
   10, 0  => 5
   -3, 3  => 0
 
function getAverage(value1, value2) {
  return (value1 + value2) / 2;
}



  @param {number} x1
  @param {number} y1
  @param {number} x2
  @param {number} y2
  @return {number}
 
  @example:
    (0,0) (0,1)    => 1
    (0,0) (1,0)    => 1
    (-5,0) (10,-10) => 18.027756377319946
 
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}


  
  @param {number} a
  @param {number} b
  @return {number}
 
  @example:
    5*x - 10 = 0    => 2
    x + 8 = 0       => -8
    5*x = 0         => 0
 
function getLinearEquationRoot(a, b) {
  if (a === 0) {
    if (b === 0) {
      
      return NaN; 
    } else {
     
      return NaN;
    }
  }
  return -b / a;
}

 
 
  @param {number} x1
  @param {number} y1
  @param {number} x2
  @param {number} y2
  @return {number}
 
  @example:
    (1,0) (0,1)     => π/2
    (0,1) (0,-1)    => π
    (0,-1) (1,0)    => π/2
    (0,1) (0,1)     => 0
 
 function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dotProduct = x1 * x2 + y1 * y2;
  const magnitude1 = Math.sqrt(x1 * x1 + y1 * y1);
  const magnitude2 = Math.sqrt(x2 * x2 + y2 * y2);
  const cosTheta = dotProduct / (magnitude1 * magnitude2);
  const clampedCosTheta = Math.min(1, Math.max(-1, cosTheta));
  return Math.acos(clampedCosTheta);
}



 
  @param {number} value
  @return {number}
 
  @example:
    100     => 0
     37     => 7
      5     => 5
      0     => 0
 
function getLastDigit(value) {
  return value % 10;
}


 
  @param {string} value
  @return {number}
 
  @example:
     '100'     => 100
      '37'     => 37
  '-525.5'     => -525.5
 
function parseNumberFromString(value) {
  return Number(value);
}


 
  @param {number} a
  @param {number} b
  @param {number} c
  @return {number}
 
  @example:
    1,1,1   => 1.7320508075688772
    3,3,3   => 5.196152422706632
    1,2,3   => 3.741657386773941
 
function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a * a + b * b + c * c);
}


 
  @param {number} num
  @param {number} pow
  @return {number}
 
  @example:
    1234, 0  => 1234
    1234, 1  => 1230
    1234, 2  => 1200
    1234, 3  => 1000
    1678, 0  => 1678
    1678, 1  => 1680
    1678, 2  => 1700
    1678, 3  => 2000
 
function roundToPowerOfTen(num, pow) {
  const factor = Math.pow(10, pow);
  return Math.round(num / factor) * factor;
}


 
  @param {number} n
  @return {boolean}
 
  @example:
    4 => false
    5 => true
    6 => false
    7 => true
    11 => true
    12 => false
    16 => false
    17 => true
 
 function isPrime(n) {
    if (n <= 1) return false; 
    if (n === 2) return true; 
    if (n % 2 === 0) return false; 

    const sqrtN = Math.sqrt(n);
    for (let i = 3; i <= sqrtN; i += 2) {
      if (n % i === 0) return false; 
    }
    return true; 
  }


 
  @param {any} value
  @param {any} def
  @return {number}
 
  @example
    toNumber(null, 0) => 0
    toNumber('test', 0) => 0
    toNumber('1', 0) => 1
    toNumber(42, 0) => 42
    toNumber(new Number(42), 0) => 42
 
function toNumber(value, def) {
  const num = Number(value);
  
  if (!isNaN(num)) {
    return num;
  }
  return def;
}


 
  @param {number} num
  @return {number}

  @example:
    3  => 27
    -2 => -8
    0  => 0
 
function getCube(num) {
  return num * num * num;
}


 
  @param {number} index
  @return {number}
 
  @example:
    0  => 0
    1  => 1
    2  => 1
    3  => 2
    10 => 55
 
function getFibonacciNumber(index) {
  if (index === 0) return 0;
  if (index === 1) return 1;
  
  let prev = 0, curr = 1;
  for (let i = 2; i <= index; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}


 
  @param {number} n
  @return {number}
 
  @example:
    5  => 15 // (1+2+3+4+5)
    10 => 55 // (1+2+3+...+10)
    1  => 1
 
function getSumToN(n) {
  return n * (n + 1) / 2;
}


 
  @param {number} num
  @return {number}
 
 @example:
    123 => 6  // (1+2+3)
    202 => 4  // (2+0+2)
    5   => 5  // 5
 
function getSumOfDigits(num) {
 
  const digits = Math.abs(num).toString();
  let sum = 0;
  
  for (let digit of digits) {
    sum += Number(digit);
  }
  
  return sum;
}


 
  @param {number} num
  @return {boolean}
 
  @example:
    4   => true
    16  => true
    15  => false
 
function isPowerOfTwo(num) {
  if (num <= 0) return false;
  return (num & (num - 1)) === 0;
}


 
  @param {number} num
  @return {number}
 
  @example:
    0 => 0
    Math.PI / 2 => 1
 
function getSine(num) {
  return Math.sin(num);
}


 
  @param {number} number
  @param {number} base
  @return {string}
 
  @example:
  255, 16 => 'ff'
  2, 2    => '10'
 
function numberToStringInBase(number, base) {
  return number.toString(base);
}


 
  @param {number} number
  @param {number} fractionDigits
  @return {string}
 
  @example:
  12345, 2    => '1.23e+4'
 
function toExponential(number, fractionDigits) {
  return number.toExponential(fractionDigits);
}


 
  @param {number} number
  @param {number} fractionDigits
  @return {string}
 
  @example:
  12345, 2    => '12345.00'
  12.345, 1   => '12.3'
 
function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}


 
  @param {number} number
  @param {number} precision
  @return {string}
 
  @example:
  12345, 7    => '12345.00'
  12.345, 4   => '12.35'
 
function toPrecision(number, precision) {
  return number.toPrecision(precision);
}

 
  @param {number} number
  @return {number}
 
  @example:
  new Number(5) => 5
  Number(-5)    => -5
 
function getNumberValue(number) {
  return Number(number);
}


 
  @param {number} number
  @return {boolean}
 
  @example:
  Infinity => false
  NaN      => false
  0        => true
  'a' / 1  => false
  'a'      => false
  5        => true
  '5'      => false
 
function isNumber(number) {
  return typeof number === 'number' && isFinite(number) && !isNaN(number);
}


 
  @param {number} number
  @return {boolean}
 
  @example:
  5    => true
  5.1  => false
  '5'  => false
 
function isInteger(number) {
  return typeof number === 'number' && Number.isInteger(number);
}


 
  @param {string} str
  @return {number | NaN}
 
  @example:
  '4.567abcdefgh' => 4.567
  'abcdefgh'      => NaN
 
function getFloatOnString(str) {
  const num = parseFloat(str);
  
  if (!isNaN(num)) {
    
    const regex = /^ *[+-]?(\d*\.?\d+)(e[+-]?\d+)?/i;
    const match = str.match(regex);
    if (match) {
      return num;
    }
  }
  return NaN;
}


  from the argument, returns NaN.
 
  @param {string} str
  @param {number} base
  @return {number | NaN}
 
  @example:
  '4.567abcdefgh', 10  => 4
  'abcdefgh', 10       => NaN
  '1.234', 2           => 1
  '10', 8              => 8
 
function getIntegerOnString(str, base) {
  
  const match = str.match(regex);

  if (match) {
    const numberStr = match[1];
    const parsed = parseInt(numberStr, base);
    // Проверяем, что parseInt вернул число (не NaN)
    if (!isNaN(parsed)) {
      return parsed;
    }
  }
  return NaN;
}


  @param {number} number
  @return {boolean}
 
  @example:
  10       => true
  3.5      => false
  2 ** 53  => false
 
function isSafeInteger(number) {
  return Number.isInteger(number) && Math.abs(number) <= Number.MAX_SAFE_INTEGER;
}


  @param {number} number
  @return {number}
 
  @example:
  5.9  => 5
  -5.1 => -6
 
function roundToSmallestInteger(number) {
  return Math.floor(number);
}


  @param {number} number
  @return {number}
 
  @example:
  5.1  => 6
  -5.9 => -5
 
function roundToLargestInteger(number) {
  return Math.ceil(number);
}

 
  @param {number} number
  @return {number}
 
  @example:
  5.5  => 6
  5.4  => 5
  -5.5 => -5
 
function roundToNearestInteger(number) {
  return Math.round(number);
}

 
  @param {number} number
  @return {number}
 
  @example:
  5.5  => 5
  5.4  => 5
  -5.5 => -5
 
function getIntegerPartNumber(number) {
  return Math.trunc(number);
}

 
  @param {number} x1
  @param {number} x2
  @param {number} x3
  @returns {number}
 
  @example:
  1, 2, 3       => 6
  0.1, 0.2, 0.3 => 0.6
 
function getSumOfNumbers(x1, x2, x3) {
  return x1 + x2 + x3;
}

 
  @param {number} firstNumber
  @param {number} secondNumber
  @return {number}
 
  @example:
  1, 2   => 2
  -5, -6 => -5
  0, 5   => 5
 
function getMaxNumber(firstNumber, secondNumber) {
  return firstNumber > secondNumber ? firstNumber : secondNumber;
}


  @param {number} min
  @param {number} max
  @return {number}
 
  @example:
  1, 2  => 1 | 2
  -5, 0 => -5 | -4 | -3 | -2 | -1 | 0
  -1, 1 => -1 | 0 | 1
 
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

 
  @param {number} a
  @param {number} b
  @return {number}
 
  @example:
  3, 4 => 5
 
 function getHypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
} 

  
  @param {number} number
  @return {number}
 
  @example:
  4  => 2
  5  => 3
  10 => 5
  15 => 8
 
function getCountOfOddNumbers(number) {
  return Math.floor((number + 1) / 2);
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};

