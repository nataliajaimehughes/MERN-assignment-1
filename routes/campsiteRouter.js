const express = require('express');
const campsiteRouter = express.Router();

// Implements the /campsites/:campsiteId routes
campsiteRouter.route('/campsites')
.all('/campsites', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get('/campsites', (req, res) => {
    res.end('Will send all the campsites to you');
})
.post('/campsites', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put('/campsites', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete('/campsites', (req, res) => {
    res.end('Deleting all campsites');
});

module.exports = campsiteRouter;