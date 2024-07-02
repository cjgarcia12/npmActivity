const Moment = require('moment');

const a = new Moment();

const timeStamp = a.format('h:mm:ss a');

console.log(timeStamp);