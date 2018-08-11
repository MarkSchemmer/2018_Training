// quick sort algorithm implementation

/*

    will be sorting ...

    [10, 20, 2, 1, 45, 0, 100, 9]

*/


/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
    array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */


   let a = [10, 20, 2, 1, 45, 0, 100, 9]

   console.log(a)

   // sorted = [0, 1, 2, 9, 10, 20, 45, 100]

let partition = function (arr, low, high) {
    let pivot = arr[high]
    
    let index = low - 1

    for(let j = low; j <= high-1; j++){
            if(arr[j] <= pivot){
                index++
                let temp = arr[index]
                arr[index] = arr[j]
                arr[j] = temp
            }
    }
    let temp = arr[index+1]
    arr[index+1] = arr[high]
    arr[high] = temp 
    return (index+1)
}

let quickSort = function (arr, low, high) {
        if(low < high){
            let pi = partition(arr, low, high)
            quickSort(arr, low, pi-1)
            quickSort(arr, pi+1, high)
        }

        return arr 
}

let test = quickSort(a, 0, a.length-1)

console.log(test)

console.log(a)