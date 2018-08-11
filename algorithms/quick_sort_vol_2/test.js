const sorts = require('./quick_sort_vol_2')
const quickSort = sorts.quickSort
const assert = require('assert')


describe('quicksort', function() {
    it('first_test', function() {
        let input = [7,2,3,0,9,8]
        let expected = [0, 2, 3, 7, 8, 9]
        assert.deepEqual(quickSort(input,0,input.length-1), expected)
    })
})