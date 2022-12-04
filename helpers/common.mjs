export const sum = array => array.reduce((acc, value) => acc + value, 0);

export const transpose = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));

export const decending = (a, b) => b - a

export const ascending = (a, b) => a - b

export const uniqueValues = (value, index, self) => self.indexOf(value) === index;

// input => [[7,36],[8,35]]
export const findOverLap = pair => {
    const [left, right] = pair;
    const [lowerLeft, upperLeft] = left.map(Number);
    const [lowerRight, upperRight] = right.map(Number);
    const overlap = []
    for (let i = lowerLeft; i <= upperLeft; i++) {
        if (i >= lowerRight && i <= upperRight) {
            overlap.push(i)
        }
    }
    return overlap
}
