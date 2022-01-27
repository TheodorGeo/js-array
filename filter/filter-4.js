/**
 * 4. Remove repeated items in an array
 */
const subscriptions = [
    'email1@example', 'email4@example',
    'email2@example', 'email3@example',
    'email3@example', 'email3@example',
]

const uniqueEmails = subscriptions.filter(
    (email, index) => subscriptions.indexOf(email) === index
)