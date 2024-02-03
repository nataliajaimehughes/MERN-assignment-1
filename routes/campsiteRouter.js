const express = require('express');
const campsiteRouter = express.Router();

// Implements the /campsites/:campsiteId routes
campsiteRouter.route('/:campsiteID')
.all('/:campsiteID', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get('/:campsiteID', (req, res) => {
    res.end('Will send all the campsites to you');
})
.post('/:campsiteID', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put('/:campsiteID', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete('/:campsiteID', (req, res) => {
    res.end('Deleting all campsites');
});

module.exports = campsiteRouter;