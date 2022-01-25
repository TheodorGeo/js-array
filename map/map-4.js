/**
 * 4. Reformat specific items of the array
 */

const arrayOfNumbers = [1, 3, 5, 8, 13, 21]

const alteredArrayOfNumbers = arrayOfNumbers.map( item => item >= 10 ? item - 10 : item)

console.log(alteredArrayOfNumbers)