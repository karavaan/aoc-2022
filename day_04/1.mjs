import { readInput } from "../helpers/read-input.mjs";
import { normalizeElvenGroups } from "./shared.mjs";
import { findOverLap } from "../helpers/common.mjs";

const input = readInput()
const elvenGroups = normalizeElvenGroups(input)

const overlappingElves = elvenGroups.filter(group => {
   const overlap = findOverLap(group);
   const lowerBound = Math.min(...overlap);
   const upperBound = Math.max(...overlap);
   return group.some(section => Number(section[0]) === lowerBound && Number(section[1]) === upperBound)
})

console.log(overlappingElves.length)
