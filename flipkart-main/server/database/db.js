import mongoose from 'mongoose';

const Connection = async (username, password) => {
        const URL = `mongodb+srv://srsinghsudhanshu98:ZvcWOHugnMLw4qe3@flipkart.t5eau.mongodb.net/`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;