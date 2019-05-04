module.exports = function initModule({ dbClient }) {

    return {
        // Leaks "tracks" here.
        getById: dbClient.users.getById,
    }

};
