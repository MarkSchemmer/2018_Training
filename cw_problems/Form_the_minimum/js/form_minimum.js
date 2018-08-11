/*

        Task
        Given a list of digits, return the smallest number that could 
        be formed from these digits, using the digits only once ( ignore duplicates). 

        Notes :
        Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

        Input >> Output Examples
        1- minValue ({1, 3, 1})  ==> return (13)
        Explanation:
        (13) is the minimum number could be formed from {1, 3, 1} , Without duplications 

        2- minValue({5, 7, 5, 9, 7})  ==> return (579)
        Explanation:
        (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications 

        3- minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
        Explanation:
        (134679) is the minimum number could 
        be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications 

        there are two ways of solving this problem sorting
        and then all possible combinations with the comparision of which
        one is least greatest!

        Implement a Dynamic permutations and a quicksort for this solution...

        maybe I could just get away with just using dynamic permutations...

        but first implement a quickSort and a dynamic programming of permutations....

*/

const obj = require('./quick')
const quickSort = obj.quickSort
const permutations = obj.permutations

let input = [5, 7, 5, 9, 7]
let input2 = [1, 9, 3, 1, 7, 4, 6, 6, 7]

let distinct = function(arr){
    let hash = {}

    for(let i = 0; i < arr.length; i++){
        if(!hash.hasOwnProperty(arr[i])){
            hash[arr[i].toString()] = arr[i]
        }
    }

    return Object.keys(hash)
            .map(x => hash[x])
            .reduce((acc,cur) => acc + cur, '')
}


let formMinimum = function(arr){
    let dist = distinct(arr)
    let permus = permutations(dist)
    return quickSort(permus,0, permus.length-1)[0]
}


let t2 = formMinimum(input2)
console.log(t2)




let test = distinct(input)
//console.log(test)