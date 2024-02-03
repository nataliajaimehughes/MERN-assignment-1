// Creates the partner router and export it, similar to campsiteRouter.js
const express = require('express');
const partnerRouter = express.Router();

// Implements the /campsites/:campsiteId routes
partnerRouter.route('/:partnerId')
.all('/:partnerId', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get('/:partnerId', (req, res) => {
    res.end('Will send all the campsites to you');
})
.post('/:partnerId', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put('/:partnerId', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete('/:partnerId', (req, res) => {
    res.end('Deleting all campsites');
});

module.exports = partnerRouter;