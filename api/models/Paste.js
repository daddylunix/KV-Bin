const mongoose = require('mongoose');

const PasteSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
});

module.exports = mongoose.model('Paste', PasteSchema);