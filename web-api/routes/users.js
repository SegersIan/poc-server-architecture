const express = require('express');

module.exports = function ({ config, userModule }) {
    const router = new express.Router();

    router.get('/users/:id', async function (req, res) {
        const user = await userModule.getById(req.params.id);
        res.send(user);
    });

    return router;
};
