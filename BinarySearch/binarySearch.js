function binarySearch(arr, target) {
  let mid = Math.floor(arr.length / 2);
  let s = 0;
  let f = arr.length - 1;
  console.log(arr, s, f);
  if (s > f) {
    return false;
  }
  if (arr[mid] == target) {
    return true;
  }
  if (arr[mid] < target) {
    s = mid + 1;
    arr = arr.slice(s, f);
    return binarySearch(arr, target);
  } else {
    f = mid;
    arr = arr.slice(s, mid);
    return binarySearch(arr, target);
  }
}
