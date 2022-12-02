import { readInput } from "../helpers/read-input.mjs";
import { calculateScore, getItem, map } from "./shared.mjs";

const SHOULD_LOSE = 'X';
const SHOULD_DRAW = 'Y';
const SHOULD_WIN = 'Z';

const input = readInput();

const rounds = input.map(entry => {
    const [opponentPlay, outcome] = entry.split(' ');
    if (outcome === SHOULD_DRAW) {
        const myPlay = map[getItem(opponentPlay)].chars?.[1]
        return [opponentPlay, myPlay]
    }
    if (outcome === SHOULD_WIN) {
        const opponentItem = getItem(opponentPlay)
        const myPlay = Object.values(map).find(item => item.beats.includes(opponentItem)).chars?.[1]
        return [opponentPlay, myPlay]
    }
    if (outcome === SHOULD_LOSE) {
        const opponentItem = getItem(opponentPlay)
        const myPlay = map[map[opponentItem].beats].chars?.[1]
        return [opponentPlay, myPlay]
    }
})

const score = calculateScore(rounds)

console.log(score)
