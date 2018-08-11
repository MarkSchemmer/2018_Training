const obj = require('./selection')
const selectionSort = obj.selectionSort
const assert = require('assert')


describe('selectionsort test', function () {
    it('first test ....', function(){
        let input = [4,2,8,9,3,1,5,6]
        let expected = [1,2,3,4,5,6,8,9]
        assert.deepEqual(selectionSort(input), expected)
    })  
})