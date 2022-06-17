// Run this script independently with node to test server-client connection

const WebSocket = require('ws');
const fs = require('fs');

const ws = new WebSocket('ws://localhost:8765');
ws.binaryType = 'arraybuffer';

ws.on('open', function open() {
    console.log('Connected');

    // send message
    ws.send('Hello!');
});

ws.on('close', function close() {
  console.log('Disconnected');
});

ws.on('message', function message(data) {
    if (data.length) {
        console.log(data);
    } else{
        var buff = Buffer.from(data, 'base64');
        console.log(buff)
        fs.writeFileSync("image.jpg", buff);
    }
});