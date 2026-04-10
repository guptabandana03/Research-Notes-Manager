require('dotenv').config();
const { MongoClient } = require('mongodb');

async function checkConnection() {
    const client = new MongoClient(process.env.MONGO_URI);
    try {
        await client.connect();
        console.log('MongoDB connection successful');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
    } finally {
        await client.close();
    }
}

checkConnection();
