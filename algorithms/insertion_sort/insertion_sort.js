

let input = [5,7,8,9,0,2,3,5,6,7,3,1,2,3,4]


let swap = function(arr, idx1, idx2){
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp 
    return arr 
}



let insertion_sort = function(arr){
  for(let i = 0; i < arr.length-1; i++){
      if(arr[i] > arr[i+1]){
        arr = swap(arr, i, i+1)
      }

          for(let j = i; j >= 0; j--){
                if(arr[j] < arr[j-1]){
                    arr = swap(arr, j, j-1)
                } else {
                    break 
                }
          }
  }

  return arr 
}


let test = insertion_sort(input)

console.log(test)