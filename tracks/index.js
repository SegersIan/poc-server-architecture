module.exports = function initModule({ dbClient }) {

    return {
        // Leaks "users" here.
        getById: dbClient.tracks.getById,
    }

};
