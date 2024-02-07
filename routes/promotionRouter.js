// Creates the promotion router and exports it, similar to campsiteRouter.js
const express = require('express');
const promotionRouter = express.Router();

promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promotions to you');
})
.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res) => {
    res.end('Deleting all promotions');
})
.get('/promotions/:promotionId', (req, res) => {
    res.end('Will send all the promotions to you');
})
.post('/promotions/:promotionId', (req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put('/promotions/:promotionId', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete('/promotions/:promotionId', (req, res) => {
    res.end('Deleting all promotions');
});

module.exports = promotionRouter;


