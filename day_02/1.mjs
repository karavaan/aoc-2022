import { readInput } from "../helpers/read-input.mjs";
import { calculateScore } from "./shared.mjs";

const input = readInput();

const rounds = input.map(entry => entry.split(' '))

const score = calculateScore(rounds)

console.log(score)
