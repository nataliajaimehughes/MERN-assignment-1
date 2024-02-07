const express = require('express');
const campsiteRouter = express.Router();

// Implements the /campsites and /campsites/:campsiteId routes
campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
})
.get('/campsites/:campsiteId', (req, res) => {
    res.end('Will send all the campsites to you');
})
.post('/campsites/:campsiteId', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put('/campsites/:campsiteId', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete('/campsites/:campsiteId', (req, res) => {
    res.end('Deleting all campsites');
});

module.exports = campsiteRouter;