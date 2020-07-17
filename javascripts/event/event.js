const eventEmitter = require('./eventEmitter');

let event = new eventEmitter();
// Mot Event duoc phat ra thi ca A,B,C deu thuc hien event nay cung luc
event.on('pulse', function(arg) {
    console.log(`A Recieve Event with Params ${arg.msisdn}, ${arg.params}, ${arg.status}.`);
});
event.on('pulse', function() {
    console.log('B Recieve Event.');
});
event.on('pulse', function() {
    console.log('C Recieve Event.');
});

event.start();
