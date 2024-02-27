import introduce from './bootcamper.js'
import bootcamperData from './bootcampers.json' assert { type: 'json' };
import { randomIntroduce } from './bootcamper.js';

const rebekah = bootcamperData[0];
const james = bootcamperData[1];
const jak = bootcamperData[2];

console.log(randomIntroduce(bootcamperData));