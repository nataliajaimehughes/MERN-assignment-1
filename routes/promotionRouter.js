// Creates the promotion router and exports it, similar to campsiteRouter.js
const express = require('express');
const promotionRouter = express.Router();

promotionRouter.route('/:promotionId')
.all('/:promotionId', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get('/:promotionId', (req, res) => {
    res.end('Will send all the campsites to you');
})
.post('/:promotionId', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put('/:promotionId', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete('/:promotionId', (req, res) => {
    res.end('Deleting all campsites');
});

module.exports = promotionRouter;


