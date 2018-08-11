// quick sort implementation....

let swap = function(arr, index1, index2){
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp 
    return arr 
}

let partition = function(arr, low, high){
    let pivot = arr[high]
    let i = (low-1)
    for(let j = low; j <= high-1; j++ ){
        if(arr[j] <= pivot){
            i++
           arr = swap(arr, i, j)
        }
    }
    arr = swap(arr, i+1, high)
    return i+1
}

let quickSort = function(arr, low, high){
    if(low < high){
        let pi = partition(arr, low, high)
        quickSort(arr, low, pi-1)
        quickSort(arr, pi+1, high)
    }
    return arr 
}
// dynamic part......
String.prototype.replaceAt = function(idx){
    var arr = [...this]
    arr.splice(idx,1)
    return arr.join('')    
}

String.prototype.insert = function(idx,item){
    var arr = [...this]
    arr.splice(idx,0,item)
    return arr.join('')
}

let helperPermutations = function(s, chosen, combinations){

    if(s.length < 1 || s == null){
            combinations.push(Number(chosen))
    } else {
        for(let i = 0; i < s.length; i++){
            // choose 1 letter
            let char = s[i]
            s = s.replaceAt(i)

            chosen += char 

            helperPermutations(s, chosen, combinations)

            s = s.insert(i, char)

            chosen = chosen.replaceAt(chosen.length-1)
        }
    }
    return combinations
}

let permutations = function(str){
    let minValule = helperPermutations(str,'', [])
    return minValule
}

let numTest = '975'


let permu = permutations(numTest)

//console.log(permu)





// let input = [2,3,7,9,2,1,0,7,5,3,2,2]
// let test = quickSort(input, 0, input.length-1)
// console.log(test)


module.exports = {
    quickSort : quickSort,
    permutations : permutations
}