import { getElves } from "./shared.mjs";

const elves = getElves();
const mostCalories = Math.max(...elves)

console.log(mostCalories)
