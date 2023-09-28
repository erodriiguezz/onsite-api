const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_URL);
    console.log(`=> Connected to database "%s" at host %s`, connect.connection.name, connect.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = dbConnect;
