

/*
    Selection sort is finding the smallest index
    and swaping that with the first index 

    and the pattern continues until it hits the 
    end of the array!


    I need to implement a swap function...

    and then a selection sort function as well...
*/

let input = [4,2,8,5,0,9,7,6]


let swap = function(arr, idx1, idx2){
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp 
    return arr 
}


let findMin = function(arr, startIndex){
    let minValue = arr[startIndex]
    let minIndex = startIndex
    for(let i = startIndex+1; i < arr.length; i++){
        if(arr[i] < minValue){
            minValue = arr[i]
            minIndex = i 
        }
    }
    arr = swap(arr, startIndex, minIndex)
    return arr 
}

let selectionSort = function (arr){
    for(let i = 0; i < arr.length; i++){
       arr =  findMin(arr, i)
    }
    return arr 
}


let test = selectionSort(input)

console.log(test)

module.exports = {
    selectionSort : selectionSort
}