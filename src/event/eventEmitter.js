const EventEmitter = require('events');

// this class will extend the EventEmitter;
const emitter = new EventEmitter();
const eventName = 'user-click';


//this code below creates a observed
/*
emitter.on(eventName, click => {
    console.log('A user has clicked', click);
});

setInterval(() => {
    emitter.emit(eventName, 'on scrollbar');
    emitter.emit(eventName, 'on ok button');
}, 1000);
*/

const stdin = process.openStdin();

stdin.addListener('data', (value) => {
    console.log(`You typed down: ${value.toString()}`);
})