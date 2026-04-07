const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    data: [Number],
    status: {
        type: String,
        enum: ["pending", "processing", "completed"], // 👈 yaha add kiya
        default: "pending"
    },
    progress: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Job', JobSchema);