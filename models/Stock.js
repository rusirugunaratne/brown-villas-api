const mongoose = require('mongoose')

const StockSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    itemCode: {
        type: String,
        required: true
    },
    itemUOM: {
        type: String,
        required: true
    },
    itemQuantity: {
        type: Number,
        required: true
    },
    itemType: {
        type: String,
        required: true
    },
    itemStatus: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("stock", StockSchema)