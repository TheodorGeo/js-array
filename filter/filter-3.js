/**
 * 3. Get invalid values so we can act properly
 */
const users = [
    {id: 1, name: 'Theodor', email: 'theodor@example.com'},
    {id: 1, name: 'Anna', email: null},
    {id: 1, name: 'Mick', email: undefined},
    {id: 1, name: 'John', email: 'john@example.com'}
]

const usersWithoutEmail = users.filter(user => user.email === undefined || user.email === null)
