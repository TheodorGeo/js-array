/**
 * 2. Filter an array of objects
 */

const profiles = [
    {id: 1, name: 'Theodor', role: 'Software Engineer'},
    {id: 2, name: 'John', role: 'Devops'},
    {id: 3, name: 'Anna', role: 'Software Engineer'},
    {id: 4, name: 'Thomas', role: 'Devops'},
    {id: 5, name: 'Michaela', role: 'Software Engineer'},
    {id: 6, name: 'Mary', role: 'Devops'},
]

const idsOfDevops = profiles.filter(profile => profile.role === 'Devops')
const totalSoftwareEngineers = profiles.filter(profile => profile.role === 'Software Engineer').length