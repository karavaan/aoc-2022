import fs from 'fs';

export const EMPTY_LINE = ""

const inputToLines = input => input.split('\n');

export const readInput = (path = './input.txt') => {
    const data = fs.readFileSync(path, 'utf8')
    return inputToLines(data).filter(Boolean).map(x => x.trim());
}
