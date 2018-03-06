const express = require('express');
const router = new express.Router();
const store = require('../db/models/store');
const Store = store.Store;
const User = require('../db/models/user');


// Updates a user by taking the entire user object and "upserting" it over the existing one.
router.post("/updateUser", (req, res) => {
    const userToUpdate = new User(req.body.userData);
    User.findOneAndUpdate({ "_id": userToUpdate._id }, userToUpdate, { upsert: true }).then(userUpdated => {
        return res.json({
            success: true,
        })
    }).catch(err => { console.log(err); return res.json(err)})
})


module.exports = router;