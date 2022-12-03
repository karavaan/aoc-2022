import { readInput } from "../helpers/read-input.mjs";
import { calculateScore, findError } from "./shared.mjs";

export const getRuckSacks = input => {
    const rucksacks = []
    while (input.length > 0) {
        const rucksack = Array(3).fill(null).map(() => input.shift());
        rucksacks.push(rucksack)
    }
    return rucksacks
}

const input = readInput();
const rucksacks = getRuckSacks(input);
const errors = rucksacks.map(findError)
const score = calculateScore(errors)

console.log(score)
