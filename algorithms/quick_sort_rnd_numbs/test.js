const assert = require('assert')
const obj = require('./rnd_quick')
const quickSort = obj.quickSort
const binarySearch = obj.binarySearch

//let arr = [...Array(100).keys()].map(x => Math.floor(Math.random() * 100))



describe('quick sort with random number', function () {
    it('quicksort test 1', function(){
        let input = [2,6,8,9,3,1,0,4,2,5]
        let expected = [0,1,2,2,3,4,5,6,8,9]
        let actual = quickSort(input, 0, input.length-1)
        assert.deepEqual(expected, actual)
    })

    it('testing the binary search', function(){
        let input = [...Array(1000000).keys()]
        let expected = 2000
        let actual = binarySearch(input, expected, 0, input.length)
        assert.equal(expected, actual)
    })

    it('testing the binary search', function(){
        let input = [...Array(1000000).keys()]
        let expected = 1
        let actual = binarySearch(input, expected, 0, input.length)
        assert.equal(expected, actual)
    })

});