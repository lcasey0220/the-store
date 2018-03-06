const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const storeSchema = new Schema({
    // name
    name: { type:String, default: "" },
    description: {
        type: String,
        default: "",
    },
    descriptionShort: {
        type: String,
        default: "",
    },
    price: {
        type: String,
        default: "",
    },
    imageUrl: {
        type: String,
        default: "",
    },
    isSold: { 
       type: Boolean,
       required: true,
       default: false,
    },

});

const Store = mongoose.model("Store", storeSchema);

module.exports = { 
    Store: Store,
    foodTruckSchema: storeSchema,
};