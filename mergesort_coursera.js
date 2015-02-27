var inputArray = [5,4,1,6,8,9,77,55,44,33,22,11];

console.log(mergesort(inputArray));

function mergesort (arrayToSort) {

  if (arrayToSort.length == 1) return arrayToSort;


  var leftMergesort = mergesort(arrayToSort.slice(0,arrayToSort.length/2)),
      leftIndex = 0,
      rightMergesort = mergesort(arrayToSort.slice(arrayToSort.length/2,arrayToSort.length)),
      rightIndex = 0,
      resultArray = [];

  for (var i = 0; i < leftMergesort.length + rightMergesort.length; i++) {
    
    if (leftIndex == leftMergesort.length) {
      resultArray = resultArray.concat(rightMergesort.slice(rightIndex,rightMergesort.length));
      break;
    } else if (rightIndex == rightMergesort.length) {
      resultArray = resultArray.concat(leftMergesort.slice(leftIndex,leftMergesort.length));
      break;    
    } else if (leftMergesort[leftIndex] < rightMergesort[rightIndex]) {
      resultArray.push(leftMergesort[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(rightMergesort[rightIndex]);
      rightIndex++;
    }
  }
  return resultArray;
}