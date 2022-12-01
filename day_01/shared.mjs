import { EMPTY_LINE, readInput } from "../helpers/read-input.mjs";

const inventory = readInput()

export const getElves = () => {
    const elves = [];

    let bag = 0;
    while (inventory.length > 0) {
        const item = inventory.shift();
        if (item === EMPTY_LINE) {
            elves.push(bag);
            bag = 0;
            continue;
        }
        bag += Number(item);
    }

    return elves
}
