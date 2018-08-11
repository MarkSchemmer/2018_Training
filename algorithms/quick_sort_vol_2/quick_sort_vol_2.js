
let swap = function(arr, index1, index2){
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp 
    return arr 
}

// implement the partition
let partition = function(arr, low, high){
    let i = low - 1 
    let pivot = arr[high]
    for(let j = low; j <= high-1; j++){
        if(arr[j] <= pivot){
            i++
            arr = swap(arr, i, j)
        }
    }
    arr = swap(arr, high, i+1)
    return (i+1)
}

// implement the quicksort....

/* I think this is a proper implementation of quicksort

*/

let quickSort = function(arr, low, high){
    if(low < high){
        let pi = partition(arr, low, high)
        quickSort(arr, pi + 1, high)
        quickSort(arr, low, pi - 1)
    }
    return arr 
}

let input = [7,2,3,0,9,8]

let test = quickSort(input, 0, input.length-1)

console.log(test)

module.exports = {
    quickSort : quickSort
}