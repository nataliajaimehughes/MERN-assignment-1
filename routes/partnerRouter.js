// Creates the partner router and export it, similar to campsiteRouter.js
const express = require('express');
const partnerRouter = express.Router();

// Implements the /campsites/:campsiteId routes
partnerRouter.route('/partners')
.all('/partners', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get('/partners', (req, res) => {
    res.end('Will send all the partners to you');
})
.post('/partners', (req, res) => {
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
})
.put('/partners', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.delete('/partners', (req, res) => {
    res.end('Deleting all partners');
});

module.exports = partnerRouter;