function fiboRec(n) {
  if (n <= 1) return 0;
  if (n <= 2) return 1;
  return fiboRec(n - 1) + fiboRec(n - 2);
}
