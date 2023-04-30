function decimalToBinary(decimal) {
  if (decimal === 0) {
    return "";
  }
  const remainder = decimal % 2;
  const remainingDecimal = Math.floor(decimal / 2);
  return decimalToBinary(remainingDecimal) + remainder;
}

const decimalNumber = 233;
const binaryNumber = decimalToBinary(decimalNumber);
console.log(`The binary representation of ${decimalNumber} is ${binaryNumber}`);
