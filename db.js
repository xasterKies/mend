const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongo://<username>:<password>@<container-name>2701//', 
        { useNewUrlParser: true, 
            useUnifiedTopology: true })

        console.log("MonogoDB Connected")

    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB