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
});

campsiteRouter.route('/:campsiteId')
.get((req, res) => {
    res.end(`We will return one campsite with ${req.params.campsiteId}`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`Post operation not supported at /campsites/${req.params.campsiteId}.`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`Will update campsite with ID:${req.params.campsiteId} Data:${req.body}`);
})
.delete((req, res) => {
    res.end(`Deleting campsite with ID: ${req.params.campsiteId}`);
});

module.exports = campsiteRouter;