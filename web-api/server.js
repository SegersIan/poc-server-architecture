const express = require('express');
const createUserRouter = require('./routes/users');
const createTrackRouter = require('./routes/tracks');

module.exports = function ({ config, userModule, trackModule }) {
    const app = express();

    app.use(createUserRouter({ config, userModule }));
    app.use(createTrackRouter({ config, trackModule }));

    return app;
};
