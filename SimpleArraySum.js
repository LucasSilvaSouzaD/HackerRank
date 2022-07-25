function simpleArraySum(ar) {
    const result = ar.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
    return result
}
