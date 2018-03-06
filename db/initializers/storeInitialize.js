const Store = require('../models/store');
const mongoose = require('mongoose');
const testStore = require('../data/storeData');

const limit = 1;

const getStore = () => {
    Store.find({}).limit(limit).exec((err, collection) => {
        if(collection.length === 0) {
            testStore.map((store) => {
                let newStore = new Store(store);
                newStore.save((err, data) => {
                    if(err) {
                        console.log(err);
                        return;
                    }
                })
            })
            console.log("Mongo DB Users initialized");
            return;
        } else {
            console.log("Nothing to initialize");
        }
    })
}

module.exports = { 
    getStore: getStore
}