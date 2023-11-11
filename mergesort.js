// Write a JavaScript program to sort a list of elements using Merge sort.

/* Merge sort is an O comparison-based sorting algorithm. Most implementations 
produce a stable sort, which means that the implementation preserves the 
input order of equal elements in the sorted output. */

// Solution:

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  const unsortedArray = [3, 6, 8, 10, 1, 2, 1];
  const sortedArray = mergeSort(unsortedArray);
  console.log(sortedArray);
  