type ID = number | string;

const userId: ID = 13;
const postId: ID = 'fuib00b5';

type Coords = [number, number];
const googleCoords: Coords = [50.4501, 30.5234];

// union types, only the ones you set here will be accepted (statuses)
type PromiseStatus = 'pending' | 'fulfilled' | 'rejected';
const fetchStatus: PromiseStatus = 'fulfilled';

type CellSize = 2 | 4 | 8 | 16;
const cell: CellSize = 8;

console.log('userId :>> ', userId);
console.log('postId :>> ', postId);
console.log('googleCoords :>> ', googleCoords);
console.log('fetchStatus :>> ', fetchStatus);
console.log('cell :>> ', cell);

export {};
