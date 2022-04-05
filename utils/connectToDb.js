import mongoose from 'mongoose';

const connection = {};

async function connectToDb() {
  if (connection.isConnected) {
    //===1
    return;
  }
  const db = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
}

export default connectToDb;
