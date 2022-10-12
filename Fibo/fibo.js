function fibo(n) {
  let a = 0;
  let b = 1;
  let arr = [a, b];
  if (n === 1) return [a];
  for (let i = 0; i < n - 2; i++) {
    let c = a + b;
    a = b;
    b = c;
    arr.push(c);
  }
  return arr;
}
