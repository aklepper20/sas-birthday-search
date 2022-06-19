const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};
function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0].day > right[0].day) {
      sorted.push(right.shift());
      //taking the 1st index of the smaller element and putting it first
    } else {
      sorted.push(left.shift());
    }
  }
  return sorted.concat(left.concat(right));
}

export default mergeSort;
