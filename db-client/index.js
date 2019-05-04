module.exports = function (config) {

    // Use config to initialize db connection;

    return {
        users: {
            getById: (id) => Promise.resolve(`A user ${id}`)
        },
        tracks: {
            getById: (id) => Promise.resolve(`A track ${id}`)
        }
    }

};
