export const sum = array => array.reduce((acc, value) => acc + value, 0);

export const transpose = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));

export const decending = (a, b) => b - a

export const ascending = (a, b) => a - b

export const uniqueValues = (value, index, self) => self.indexOf(value) === index;
