import { getElves } from "./shared.mjs";
import { decending, sum } from "../helpers/common.mjs";

const elves = getElves();

const findTopElves = top => {
    return elves.sort(decending).slice(0, top)
}

const topElves = findTopElves(3);
const sumOfTopElves = sum(topElves)

console.log(sumOfTopElves)
