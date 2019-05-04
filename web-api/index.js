const server = require('./server');
const config = require('../config');
const createDbClient = require('../db-client');
const createUserModule = require('../users');
const createTracksModule = require('../tracks');

const dbClient = createDbClient(config);
const userModule = createUserModule({ config, dbClient });
const trackModule = createTracksModule({ config, dbClient });

server({config, dbClient, userModule, trackModule})
    .listen(config.host.port, () => console.log(`Listening on port ${config.host.port}`));
