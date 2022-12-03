import { sum } from "../helpers/common.mjs";

export const findError = rucksack => {
    const [baseCompartment, ...compartments] = rucksack.map(compartment => compartment.split(''))
    for (const item of baseCompartment) {
        const isError = compartments.every(compartment => compartment.includes(item));
        if (isError) {
            return item;
        }
    }
}

const getAsciiValue = char => char.codePointAt(0)

const isCapital = ascii => ascii < 91

export const calculateScore = errors => {
    const scores = errors.map(error => {
        const ascii = getAsciiValue(error)
        if (isCapital(ascii)) {
            return ascii - 38
        }
        return ascii - 96
    })
    return sum(scores)
}
