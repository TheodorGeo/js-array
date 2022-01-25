/**
 * 3. Extract specific values from each item of an array
 */

const users = [
    {id: 1, name: 'Anna', age: 20},
    {id: 2, name: 'Theodor', age: 25},
    {id: 3, name: 'John', age: 30}
]

const ids = users.map( person => person.id )
