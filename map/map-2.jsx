/**
 * 2. Rendering a list in React !
 */

const App = () => {
    const availableSelections = [
        'United States',
        'France',
        'Greece',
        'Italy'
    ]

    const selectOptions = availableSelections.map(
        (option, index) =>
            <option value={option} key={index}>
                {option}
            </option>
    )
    return (
        <select>
            {selectOptions}
        </select>
    )
}