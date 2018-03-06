const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        default: "",
    },
    lastName: {
        type: String,
        default: "",
    },
    password: { type: String, required: true, },
    role: {
        type: String,
        enum: ['CEO', 'CFO', 'COO'],
        default: ['CEO']
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
}, {
    timestamps: true
});

// Hashes the password before we send it to the database.
userSchema.pre('save', function(next) {
    const user = this;
    const saltFactor = 5;
    
    // Checks whether there's a reason to hash the password in the first place.
    
    if(!user.isModified('password')) return next();

    bcrypt.genSalt(saltFactor, (err, salt) => {
        if(err) return next(err);
        console.log("Salting password")
        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) {
                console.log(err);
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

// Compares a candidate for password to a hashed password.
userSchema.methods.comparePassword = function(candidate) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidate, this.password, (err, isMatch) => {
            console.log(err);
            if(err) return reject(err);
            resolve(isMatch);
        })
    })

}


const User = mongoose.model("User", userSchema);

module.exports = User;