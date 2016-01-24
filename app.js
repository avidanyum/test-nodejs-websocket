var wsServer = require('ws').Server;
var ws = new wsServer({
  port: '8080',
  path: 'mypath'
});

ws.on('open', function open() {
  ws.send('something');
});

ws.on('message', function(data, flags) {
  console.log("got message: " + data)
  // flags.binary will be set if a binary data is received.
  // flags.masked will be set if the data was masked.
});
