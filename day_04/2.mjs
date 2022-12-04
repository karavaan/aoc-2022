import { readInput } from "../helpers/read-input.mjs";
import { normalizeElvenGroups } from "./shared.mjs";
import { findOverLap } from "../helpers/common.mjs";

const input = readInput()
const elvenGroups = normalizeElvenGroups(input)

const overlappingElves = elvenGroups.filter(group => {
    const overlap = findOverLap(group);
    return overlap.length > 0
})

console.log(overlappingElves.length)
