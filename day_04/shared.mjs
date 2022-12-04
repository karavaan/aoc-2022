const getSections = line => line.split(',');

const getBounds = sections => sections.map(section => section.split('-'))

export const normalizeElvenGroups = input => input.map(getSections).map(getBounds);
