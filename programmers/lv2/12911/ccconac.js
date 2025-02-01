function binaryCount(number) {
  const binaryNumber = number.toString(2).split('');
  let count = 0;

  for (let i = 0; i < binaryNumber.length; i++) {
    if (binaryNumber[i] === '1') count += 1;
  }

  return count;
}

function solution(n) {
  let bigNumber = n;

  while (true) {
    bigNumber += 1;
    if (binaryCount(n) === binaryCount(bigNumber)) return bigNumber;
  }
}
