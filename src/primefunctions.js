function primeGen(threshhold) {
  const values = [];
  const upper = Math.sqrt(threshhold);
  const output = [];

  let i;
  let j;
  for (i = 0; i < threshhold; i++) {
    values.push(true);
  }

  for (i = 2; i <= upper; i++) {
    for (j = i * i; j < threshhold; j += i) {
      values[j] = false;
    }
  }

  for (i = 2; i < threshhold; i++) {
    if (values[i]) {
      output.push(i);
    }
  }

  return output;
}

function cumlativeSum(list) {
  const output = [];
  let n = 0;
  let i;

  for (i = 0; i < list.length; i++) {
    n += list[i];
    output.push(n);
  }

  return output;
}

function maxPrimeSum(n) {
  let primes = primeGen(n);
  const primesTemp = primes;
  let sums = cumlativeSum(primes);
  const output = [];
  const output2 = [];
  let output3 = [0, 0];

  let i; let num; let k; let j;
  for (i = 0; i < primes.length; i++) {
    num = 0;
    k = 0;
    while (num < n) {
      num = sums[k];
      k++;
      output.push([num, k]);
    }
    // output.push([prev,k - 1]);
    primesTemp.shift();
    sums = cumlativeSum(primesTemp);
  }

  primes = primeGen(n);
  for (i = 0; i < output.length; i++) {
    for (j = 0; j < primes.length; j++) {
      if (output[i][0] === primes[j]) {
        output2.push(output[i]);
      }
    }
  }

  for (i = 0; i < output2.length; i++) {
    if (output2[i][1] > output3[1]) {
      output3 = output2[i];
    }
  }
  return output3;
}

primeGen(100);
cumlativeSum(0);
maxPrimeSum(1500);
