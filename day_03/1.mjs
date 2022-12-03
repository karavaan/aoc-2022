import { readInput } from "../helpers/read-input.mjs";
import { calculateScore, findError } from "./shared.mjs";

export const divideInCompartments = rucksacks => rucksacks.map(rucksack => {
    const amount = rucksack.length
    const midpoint = amount / 2;
    return [rucksack.slice(0, midpoint), rucksack.slice(midpoint, amount)]
})

let rucksacks = readInput();
rucksacks = divideInCompartments(rucksacks);
const errors = rucksacks.map(findError)
const score = calculateScore(errors)

console.log(score)
