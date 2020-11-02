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

//console.log(primeGen(10));

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

//console.log(cumlativeSum(primeGen(10)));

function maxPrimeSum(n) {
  let primes = primeGen(n);
  let primesTemp = primes;
  let sums = cumlativeSum(primes);
  let output = [];
  let output2 = [];
  let output3 = [];

  let i,num,prev,k,j;
  for (i = 0; i < primes.length; i++) {
    prev = num;
    num = 0;
    k = 0;
    while (num < n) {
      prev = num;
      num = sums[k];
      k++;
      output.push([num,k]);
    }
    //output.push([prev,k - 1]);
    primesTemp.shift();
    sums = cumlativeSum(primesTemp);
  }

  primes = primeGen(n);
  for (i = 0; i < output.length;i++) {
    for (j = 0; j < primes.length;j++) {
      if (output[i][0] === primes[j]) {
        output2.push(output[i]);
      }
    }
    output3 = output2[0];
  }

  for (i = 0; i < output2.length; i++) {
    if (output2[i][1] > output3[1]) {
      output3 = output2[i];
    }
  }
  return output3;
}
console.log(maxPrimeSum(100));

