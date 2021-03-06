const mongoose = require('mongoose');
const userInitializer = require('./initializers/userInitializer');


module.exports = (uri) => {
    mongoose.Promise = global.Promise;
    mongoose.connect(uri);
    const db = mongoose.connection;
    db.on('error', () => console.log("Error"));
    db.once('open', () => {
        console.log("Database connected");
        userInitializer.getUsers();
        shopInitializer.getStore();
    })
}
