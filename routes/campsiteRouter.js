const express = require('express');
const bodyParser = require('body-parser');

const campsiteRouter = express.Router();

campsiteRouter.use(bodyParser.json());

campsiteRouter
    .route('/')
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
        res.end('Updating the campsites');
    })
    .delete((req, res) => {
        res.end('Deleting all campsites');
    });

campsiteRouter
    .route('/:campsiteId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send info for campsite ${req.params.campsiteId} to you`);
    })
    .post((req, res) => {
        res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.end(`Updating the campsite: ${req.params.campsiteId}. Will update the campsite: ${req.body.name} with description: ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting campsite ${req.params.campsiteId}`);
    });

module.exports = campsiteRouter;