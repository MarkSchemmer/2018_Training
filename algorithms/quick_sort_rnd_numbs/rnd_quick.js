


let gettingMedian = function (arr) {
    let rnd_arr = [...Array(7).keys()].map(x => arr[ Math.floor(Math.random() * 99) ] ).sort()
    return rnd_arr[Math.floor(rnd_arr.length/2)]
}

Array.prototype.swap = function(index1,index2){
    let arr = this 
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp 
    return arr 
}

// O(n)
let partition = function(arr, low, high){
    let i = (low -1)
    let pivot = arr[high]

    for(let j = low; j <= high-1; j++){
        if(arr[j] <= pivot){
            i++
            arr.swap(j,i)
        }
    }
    arr.swap(i+1,high)
    return i+1
}

// O(log n)
let quickSort = function (arr, low, high){
    if(low < high){
        let pi = partition(arr, low, high)
        quickSort(arr, low, pi-1)
        quickSort(arr, pi+1, high)
    }
    return arr 
}

// the two combined it's O(nlogn) i guess....!

let ar = [...Array(100).keys()]

let binarySearch = function(arr, valueToFound, lowerBound=0, upperBound=arr.length){
    let half = Math.floor((upperBound - lowerBound) / 2)
    let mid = lowerBound + half
    if(arr[mid] == valueToFound){
        return arr[mid]
    } else if (valueToFound > arr[arr.length-1] || valueToFound < arr[0]) {
        return false 
    } else if(valueToFound < arr[mid]){
       return binarySearch(arr, valueToFound, lowerBound, mid)
    } else {
        return binarySearch(arr, valueToFound, mid, upperBound)
    }
}

let test = binarySearch(ar, 1, 0, ar.length)

console.log(test)

module.exports = {
    quickSort : quickSort,
    binarySearch : binarySearch
}



