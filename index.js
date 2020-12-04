function bubbleSort(arr){
  for (let i = arr.length ; i > 0; i--){
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
  
}

bubbleSort([3,1,2,-543,50,3,125,-1,5,7,5,1203,-23,0,123,6,-2,66,32352,0,235,235,109,5,18,96,43,4,-2,6,7,8,8])