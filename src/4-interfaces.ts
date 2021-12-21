// objects. use interface to set keys and value types.

interface Config {
  readonly username: string; // set readonly (used only in dev mode)
  password: string;
  darkTheme: boolean;
  bitCode?: number; // not required key|value pair
}

const settings: Config = {
  username: 'lero',
  password: '654loop',
  darkTheme: false,
  bitCode: 64,
};

// set object types of unknown number of key|value pairs:
interface Workers {
  [key: string]: number | number[];
}

const bestWorkers: Workers = {
  John: 40,
  Lero: [13, 60, 10],
  Adib: 45,
};

const entries = Object.entries(bestWorkers);
let bestWorkerName = '';
let bestWorkerIndex = 0;

for (const [name, value] of entries) {
  if (bestWorkerIndex <= value) {
    bestWorkerName = name;
  }
}

console.log('settings :>> ', settings);
console.log('bestWorkers :>> ', bestWorkers);
console.log('bestWorkerName :>> ', bestWorkerName);

export {};
