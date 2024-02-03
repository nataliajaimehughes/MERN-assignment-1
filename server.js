const express = require('express');

const campsiteRouter = require('./routes/campsiteRouter');
// Imports the partnerRouter, similar to the campsiteRouter above
// Imports the promotionRouter, similar to the campsiteRouter above
const promotionRouter = require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');


const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(express.json());

app.use('/:campsiteId', campsiteRouter);
// Uses the partnerRouter at /partners, similar to the campsiteRouter above at /campsites
// Uses the promotionRouter at /promotions, similar to the campsiteRouter above at /campsites
app.use('/:promotionId', promotionRouter);
app.use('/:partnerId', partnerRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});