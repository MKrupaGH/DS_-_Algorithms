let arr = [4, 8, 6, 2, 1, 7, 5, 3];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArr, rightArr) {
  let result = [];
  let l = 0;
  let h = 0;
  while (l < leftArr.length && h < rightArr.length) {
    if (leftArr[l] < rightArr[h]) {
      result.push(leftArr[l]);
      l++;
    } else {
      result.push(rightArr[h]);
      h++;
    }
  }
  while (l < leftArr.length) {
    result.push(leftArr[l]);
    l++;
  }
  while (h < rightArr.length) {
    result.push(rightArr[h]);
    h++;
  }
  return result;
}
