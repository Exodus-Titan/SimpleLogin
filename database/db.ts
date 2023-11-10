import mongoose from "mongoose";
 
async function db() {
  const url = "mongodb+srv://Carlosed15:5qqv5fj2cnDBKdwp@cluster0.png8mpk.mongodb.net/?retryWrites=true&w=majority";
 
  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any);
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
  const db = mongoose.connection;
  db.once("open", (_) => {
    console.log(`Database connected: ${url}`);
  });
 
  db.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}

module.exports = db;
