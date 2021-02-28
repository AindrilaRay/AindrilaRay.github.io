//Import dependencies
const SerialPort = require('serialport');

// Define serial port
const port = new SerialPort("COM3", {
    baudRate: 9600,
});

//Write data to serial port
port.write('p')
