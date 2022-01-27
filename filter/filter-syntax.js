/**
 * Syntax of Array.prototype.filter
 */

const testArray = [1, 2, 3, 4, 5]

const results = testArray.filter((value, index, initialArray) => {
    return value === 1 // condition to push the value into the new results array
})