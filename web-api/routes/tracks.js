const express = require('express');

module.exports = function ({ trackModule }) {
    const router = new express.Router();

    router.get('/tracks/:id', async function (req, res) {
        const track = await trackModule.getById(req.params.id);
        res.send(track);
    });

    return router;
};
